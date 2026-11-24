from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.fetch_channel_videos_error import FetchChannelVideosErrorBody, fetch_channel_videos_error_mapper
from ..errors.fetch_playlist_videos_error import FetchPlaylistVideosErrorBody, fetch_playlist_videos_error_mapper
from ..errors.fetch_transcripts_batch_error import FetchTranscriptsBatchErrorBody, fetch_transcripts_batch_error_mapper
from ..errors.fetch_video_transcript_error import FetchVideoTranscriptErrorBody, fetch_video_transcript_error_mapper
from ..errors.get_api_v2_transcripts_jobs_by_job_id_error import (
    GetApiV2TranscriptsJobsByJobIdErrorBody,
    get_api_v2_transcripts_jobs_by_job_id_error_mapper,
)
from ..errors.get_transcript_job_error import GetTranscriptJobErrorBody, get_transcript_job_error_mapper
from ..errors.post_api_v2_transcripts_batch_error import (
    PostApiV2TranscriptsBatchErrorBody,
    post_api_v2_transcripts_batch_error_mapper,
)
from ..errors.post_api_v2_transcripts_channel_error import (
    PostApiV2TranscriptsChannelErrorBody,
    post_api_v2_transcripts_channel_error_mapper,
)
from ..errors.post_api_v2_transcripts_playlist_error import (
    PostApiV2TranscriptsPlaylistErrorBody,
    post_api_v2_transcripts_playlist_error_mapper,
)
from ..errors.post_api_v2_transcripts_search_error import (
    PostApiV2TranscriptsSearchErrorBody,
    post_api_v2_transcripts_search_error_mapper,
)
from ..errors.post_api_v2_transcripts_video_error import (
    PostApiV2TranscriptsVideoErrorBody,
    post_api_v2_transcripts_video_error_mapper,
)
from ..errors.search_videos_error import SearchVideosErrorBody, search_videos_error_mapper
from ..models.batch_envelope import BatchEnvelope
from ..models.batch_request import BatchRequest, BatchRequestDict
from ..models.channel_request import ChannelRequest, ChannelRequestDict
from ..models.channel_request2 import ChannelRequest2, ChannelRequest2Dict
from ..models.job_status_envelope import JobStatusEnvelope
from ..models.job_status_envelope2 import JobStatusEnvelope2
from ..models.playlist_request import PlaylistRequest, PlaylistRequestDict
from ..models.playlist_request2 import PlaylistRequest2, PlaylistRequest2Dict
from ..models.search_request import SearchRequest, SearchRequestDict
from ..models.search_request2 import SearchRequest2, SearchRequest2Dict
from ..models.success_envelope import SuccessEnvelope
from ..models.video_request import VideoRequest, VideoRequestDict
from ..server.server import Server


class Transcripts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TranscriptsWithRawResponse(client, server, auth)

    def fetch_channel_videos(
        self,
        body: ChannelRequest | ChannelRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get
        back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this
        safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_channel_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def fetch_playlist_videos(
        self,
        body: PlaylistRequest | PlaylistRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a playlist into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_playlist_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def fetch_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchEnvelope:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_transcripts_batch(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def fetch_video_transcript(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_video_transcript(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def get_api_v2_transcripts_jobs_by_job_id(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobStatusEnvelope2:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v2_transcripts_jobs_by_job_id(job_id, request_options=request_options)
        )

    def get_transcript_job(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> JobStatusEnvelope:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(self._with_raw_response.get_transcript_job(job_id, request_options=request_options))

    def post_api_v2_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchEnvelope:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v2_transcripts_batch(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def post_api_v2_transcripts_channel(
        self,
        body: ChannelRequest2 | ChannelRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The
        platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple
        Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch
        endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with
        nothing new is free, which makes this safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v2_transcripts_channel(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def post_api_v2_transcripts_playlist(
        self,
        body: PlaylistRequest2 | PlaylistRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the
        input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have
        no public playlists; list the profile or show through the channel endpoint instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v2_transcripts_playlist(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def post_api_v2_transcripts_search(
        self,
        body: SearchRequest2 | SearchRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches
        YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index
        instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where
        the source provides them.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v2_transcripts_search(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def post_api_v2_transcripts_video(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v2_transcripts_video(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def search_videos(
        self,
        body: SearchRequest | SearchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a keyword search into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.search_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TranscriptsWithRawResponse:
        return self._with_raw_response


class AsyncTranscripts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTranscriptsWithRawResponse(client, server, auth)

    async def fetch_channel_videos(
        self,
        body: ChannelRequest | ChannelRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get
        back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this
        safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_channel_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def fetch_playlist_videos(
        self,
        body: PlaylistRequest | PlaylistRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a playlist into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_playlist_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def fetch_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchEnvelope:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_transcripts_batch(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def fetch_video_transcript(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_video_transcript(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def get_api_v2_transcripts_jobs_by_job_id(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobStatusEnvelope2:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v2_transcripts_jobs_by_job_id(job_id, request_options=request_options)
        )

    async def get_transcript_job(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JobStatusEnvelope:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(await self._with_raw_response.get_transcript_job(job_id, request_options=request_options))

    async def post_api_v2_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchEnvelope:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v2_transcripts_batch(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def post_api_v2_transcripts_channel(
        self,
        body: ChannelRequest2 | ChannelRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The
        platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple
        Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch
        endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with
        nothing new is free, which makes this safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v2_transcripts_channel(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def post_api_v2_transcripts_playlist(
        self,
        body: PlaylistRequest2 | PlaylistRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the
        input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have
        no public playlists; list the profile or show through the channel endpoint instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v2_transcripts_playlist(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def post_api_v2_transcripts_search(
        self,
        body: SearchRequest2 | SearchRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches
        YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index
        instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where
        the source provides them.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v2_transcripts_search(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def post_api_v2_transcripts_video(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v2_transcripts_video(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def search_videos(
        self,
        body: SearchRequest | SearchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessEnvelope:
        """Resolve a keyword search into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error Error Error Error Error Error Error Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.search_videos(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTranscriptsWithRawResponse:
        return self._with_raw_response


class TranscriptsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_channel_videos(
        self,
        body: ChannelRequest | ChannelRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchChannelVideosErrorBody]:
        """Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get
        back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this
        safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/channel"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ChannelRequest | ChannelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=fetch_channel_videos_error_mapper,
            request_options=request_options,
        )

    def fetch_playlist_videos(
        self,
        body: PlaylistRequest | PlaylistRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchPlaylistVideosErrorBody]:
        """Resolve a playlist into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/playlist"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[PlaylistRequest | PlaylistRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=fetch_playlist_videos_error_mapper,
            request_options=request_options,
        )

    def fetch_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchEnvelope, FetchTranscriptsBatchErrorBody]:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/batch"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchEnvelope],
            error_mapper=fetch_transcripts_batch_error_mapper,
            request_options=request_options,
        )

    def fetch_video_transcript(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchVideoTranscriptErrorBody]:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/video"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[VideoRequest | VideoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=fetch_video_transcript_error_mapper,
            request_options=request_options,
        )

    def get_api_v2_transcripts_jobs_by_job_id(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusEnvelope2, GetApiV2TranscriptsJobsByJobIdErrorBody]:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/transcripts/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobStatusEnvelope2],
            error_mapper=get_api_v2_transcripts_jobs_by_job_id_error_mapper,
            request_options=request_options,
        )

    def get_transcript_job(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusEnvelope, GetTranscriptJobErrorBody]:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/transcripts/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JobStatusEnvelope],
            error_mapper=get_transcript_job_error_mapper,
            request_options=request_options,
        )

    def post_api_v2_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchEnvelope, PostApiV2TranscriptsBatchErrorBody]:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/batch"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchEnvelope],
            error_mapper=post_api_v2_transcripts_batch_error_mapper,
            request_options=request_options,
        )

    def post_api_v2_transcripts_channel(
        self,
        body: ChannelRequest2 | ChannelRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsChannelErrorBody]:
        """Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The
        platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple
        Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch
        endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with
        nothing new is free, which makes this safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/channel"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ChannelRequest2 | ChannelRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_channel_error_mapper,
            request_options=request_options,
        )

    def post_api_v2_transcripts_playlist(
        self,
        body: PlaylistRequest2 | PlaylistRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsPlaylistErrorBody]:
        """Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the
        input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have
        no public playlists; list the profile or show through the channel endpoint instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/playlist"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[PlaylistRequest2 | PlaylistRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_playlist_error_mapper,
            request_options=request_options,
        )

    def post_api_v2_transcripts_search(
        self,
        body: SearchRequest2 | SearchRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsSearchErrorBody]:
        """Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches
        YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index
        instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where
        the source provides them.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/search"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_search_error_mapper,
            request_options=request_options,
        )

    def post_api_v2_transcripts_video(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsVideoErrorBody]:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/video"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[VideoRequest | VideoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_video_error_mapper,
            request_options=request_options,
        )

    def search_videos(
        self,
        body: SearchRequest | SearchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, SearchVideosErrorBody]:
        """Resolve a keyword search into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/search"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=search_videos_error_mapper,
            request_options=request_options,
        )


class AsyncTranscriptsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_channel_videos(
        self,
        body: ChannelRequest | ChannelRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchChannelVideosErrorBody]:
        """Resolve a channel into a paginated list of videos (metadata only), newest first. Pass since_video_id to get
        back only the uploads newer than one you've already seen - a page with nothing new is free, which makes this
        safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/channel"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ChannelRequest | ChannelRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=fetch_channel_videos_error_mapper,
            request_options=request_options,
        )

    async def fetch_playlist_videos(
        self,
        body: PlaylistRequest | PlaylistRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchPlaylistVideosErrorBody]:
        """Resolve a playlist into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/playlist"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[PlaylistRequest | PlaylistRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=fetch_playlist_videos_error_mapper,
            request_options=request_options,
        )

    async def fetch_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchEnvelope, FetchTranscriptsBatchErrorBody]:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/batch"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchEnvelope],
            error_mapper=fetch_transcripts_batch_error_mapper,
            request_options=request_options,
        )

    async def fetch_video_transcript(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, FetchVideoTranscriptErrorBody]:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/video"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[VideoRequest | VideoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=fetch_video_transcript_error_mapper,
            request_options=request_options,
        )

    async def get_api_v2_transcripts_jobs_by_job_id(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusEnvelope2, GetApiV2TranscriptsJobsByJobIdErrorBody]:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/transcripts/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobStatusEnvelope2],
            error_mapper=get_api_v2_transcripts_jobs_by_job_id_error_mapper,
            request_options=request_options,
        )

    async def get_transcript_job(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JobStatusEnvelope, GetTranscriptJobErrorBody]:
        """Returns the state of a transcription job created when a request escalated to audio. 200 for any job your
        account owns (an unknown id, or a job belonging to someone else, is a 404): read the status field, which is
        "processing" while the job is running, "completed" with the transcript in data, or "failed" with an error. The
        job_id and a ready-to-use poll_url come back in the 202 that started it. Free to poll on our side - credits are
        charged once, on delivery (1 credit per started minute of audio, minimum 1). NOTE for RapidAPI subscribers:
        every poll is still a billable request on your Hub plan, so prefer callback_url, or simply re-send the original
        request once the job has had time to finish (the result is cached, so it returns instantly and the delivery is
        charged once, not twice). Most transcriptions never reach this endpoint at all: when we can determine the media
        length, media under 20 minutes is returned synchronously, and short-form platforms (TikTok and Instagram) are
        held inline even when we cannot.

        Args:
            job_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/transcripts/jobs/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JobStatusEnvelope],
            error_mapper=get_transcript_job_error_mapper,
            request_options=request_options,
        )

    async def post_api_v2_transcripts_batch(
        self,
        body: BatchRequest | BatchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchEnvelope, PostApiV2TranscriptsBatchErrorBody]:
        """Fetch a batch of transcripts concurrently. Batch size follows your plan: up to 50 entries on the free tier,
        Basic and Pro, and up to 500 on Mega and Scale (a request over your plan's cap fails whole with a clear error
        before anything is fetched or charged). Accepts the same inputs as /transcripts/video - YouTube, TikTok and
        Instagram URLs as well as bare YouTube IDs. Charges 1 credit per successfully fetched transcript; failed videos
        are free. Entries with no caption track are transcribed from audio by default: those come back with outcome
        "processing" and a job_id, cost nothing on this call, and are charged on delivery at the audio rate. Re-send the
        same batch once they have finished and the text is returned normally - polling is optional. Send mode:
        "captions" to keep the old behaviour and have captionless entries fail as no_transcript instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/batch"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchEnvelope],
            error_mapper=post_api_v2_transcripts_batch_error_mapper,
            request_options=request_options,
        )

    async def post_api_v2_transcripts_channel(
        self,
        body: ChannelRequest2 | ChannelRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsChannelErrorBody]:
        """Resolve a creator or show into a paginated list of videos or episodes (metadata only), newest first. The
        platform is read from the input: a YouTube channel, a TikTok or Instagram profile URL, a Spotify or Apple
        Podcasts show URL, or any podcast RSS/Atom feed URL. Every row's url is accepted by the transcript and batch
        endpoints as-is. Pass since_video_id to get back only the items newer than one you've already seen - a page with
        nothing new is free, which makes this safe to poll on a schedule.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/channel"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ChannelRequest2 | ChannelRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_channel_error_mapper,
            request_options=request_options,
        )

    async def post_api_v2_transcripts_playlist(
        self,
        body: PlaylistRequest2 | PlaylistRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsPlaylistErrorBody]:
        """Resolve a playlist into a paginated list of videos or episodes (metadata only). The platform is read from the
        input: a YouTube playlist, a TikTok playlist URL, or a Spotify playlist URL. Instagram and Apple Podcasts have
        no public playlists; list the profile or show through the channel endpoint instead.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/playlist"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[PlaylistRequest2 | PlaylistRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_playlist_error_mapper,
            request_options=request_options,
        )

    async def post_api_v2_transcripts_search(
        self,
        body: SearchRequest2 | SearchRequest2Dict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsSearchErrorBody]:
        """Resolve a keyword search into a paginated list of videos or podcast episodes (metadata only). Searches
        YouTube by default; set platform to search TikTok, Instagram, Spotify, Apple Podcasts, or the open podcast index
        instead. Every row carries a url the transcript endpoint accepts unchanged, plus duration and publish time where
        the source provides them.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/search"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_search_error_mapper,
            request_options=request_options,
        )

    async def post_api_v2_transcripts_video(
        self,
        body: VideoRequest | VideoRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, PostApiV2TranscriptsVideoErrorBody]:
        """Returns a transcript - text plus timestamped segments. Accepts YouTube, TikTok, and Instagram URLs (or a bare
        TikTok video id), direct media file URLs, and podcast links (Spotify, Apple Podcasts, or an RSS feed), which
        resolve to the episode's audio automatically and come back with a podcast block naming the show and episode.
        Podcast transcriptions may include best-effort speaker diarization: when labels were produced, each segment
        carries a ``speaker`` integer (0, 1, ...) identifying who is talking and a top-level ``diarized: true`` marks
        the transcript. Speaker ids are hints from voice separation, not named identification, and non-podcast sources
        never carry them. When no captions exist the audio is transcribed automatically: when we can determine the media
        length, media under 20 minutes simply waits (the request is held open for up to 45 seconds) and returns the
        finished transcript, so no polling is needed; when the length cannot be determined, only short-form platforms
        (TikTok and Instagram) are held inline. Longer media, or a transcription still running when the 45-second hold
        expires, returns 202 with a job to poll instead - the work continues either way, so the same request is safe to
        retry and will hit the cache once it finishes. Supply callback_url to have the finished transcript POSTed to you
        instead of polling. Every failure carries an ai_fallback block saying whether captions were definitively
        unavailable and whether retrying would work.

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/transcripts/video"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[VideoRequest | VideoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=post_api_v2_transcripts_video_error_mapper,
            request_options=request_options,
        )

    async def search_videos(
        self,
        body: SearchRequest | SearchRequestDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessEnvelope, SearchVideosErrorBody]:
        """Resolve a keyword search into a paginated list of videos (metadata only).

        Args:
            body: The request body.
            idempotency_key: Unique key (≤255 chars) to safely retry a request without being charged twice. Replays
                return the original response with ``Idempotent-Replayed: true``. Reusing a key with a different body is
                a 409 conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/transcripts/search"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[SearchRequest | SearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=search_videos_error_mapper,
            request_options=request_options,
        )
