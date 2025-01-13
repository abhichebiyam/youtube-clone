#  YouTube Skeleton Clone

This project is a simplified YouTube clone developed as part of a Full Stack Development course. The goal is to implement core YouTube functionalities, focusing on learning and scalability rather than creating a production-ready system.

## Features
- **User sign-in/out with Google accounts (via Firebase Auth).**
- **Authenticated users can upload videos.**
- **Videos are transcoded to multiple formats (e.g., 360p, 720p).**
- **All users (authenticated or not) can view a list of uploaded videos.**
- **Individual video playback is available to all users.**

## High-Level Architecture

The system is built using Google Cloud Platform services for scalability and simplicity:
- **Video Storage: Google Cloud Storage hosts raw and processed videos.**
- **Video Upload Events: Cloud Pub/Sub handles asynchronous video processing events.**
- **Video Processing Workers: Cloud Run processes and transcodes videos using ffmpeg.**
- **Video Metadata: Firestore stores metadata about processed videos.**
- **Video API: Firebase Functions provide APIs for uploading videos and retrieving metadata.**
- **Web Client: A Next.js application hosted on Cloud Run serves as the frontend.**
- **Authentication: Firebase Auth manages user authentication and Google Sign-In.**

![YouTube Clone Architecture](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2d33be5f-6a51-4475-6975-7350d9d3d700/public)

## Detailed Design

1. User Authentication
- **Users sign in using Google accounts via Firebase Auth.**
- **A Firestore document is created for each user upon sign-up to store additional metadata.**
- **Firebase Auth triggers ensure server-side user document creation.**

2. Video Upload
- **Only authenticated users can upload videos.**
- **Signed URLs are generated using Firebase Functions, allowing secure uploads directly to Cloud Storage.**
- **Raw videos are stored in a private Cloud Storage bucket.**

3. Video Processing
- **When a video is uploaded, a Cloud Pub/Sub message is triggered.**
- **Video processing workers on Cloud Run transcode videos using ffmpeg.**
- **Processed videos are stored in a public Cloud Storage bucket.**
- **Metadata, including processing status, is stored in Firestore for frontend access.**

## Limitations
- **Cloud Run Timeout: Requests have a max timeout of 3600 seconds.**
- **Message Redelivery: Pub/Sub may redeliver a message after 600 seconds.**
- **Content Moderation: Illegal content in videos is not currently checked.**

## Future Work
- **Implement video rating and commenting features.**
- **Add quotas for video uploads (e.g., max 10 videos/day per user).**
- **Integrate analytics and monitoring for uploaded videos.**
- **Introduce content moderation checks.**

## References
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Cloud Storage Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls)
- [Pub/Sub Push Subscriptions](https://cloud.google.com/pubsub/docs/push)
- [Using Pub/Sub with Cloud Storage](https://cloud.google.com/storage/docs/pubsub-notifications)
- [Using Pub/Sub with Cloud Run](https://cloud.google.com/run/docs/tutorials/pubsub)
