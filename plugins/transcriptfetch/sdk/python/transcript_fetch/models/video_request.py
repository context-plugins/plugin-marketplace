from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode import Mode, ModeOrStr
from .unions.timestamps1 import Timestamps1, Timestamps1Dict


class VideoRequest(SdkBaseModel):
    video: str
    """A video URL or 11-character YouTube video ID. Accepts YouTube (watch, youtu.be, /shorts/), TikTok, and Instagram
    URLs, plus direct media file URLs (mp4/mp3/wav/…). Also accepts podcast links: a Spotify or Apple Podcasts episode
    URL, or a podcast RSS feed URL, which is resolved to that episode's audio automatically. Videos without captions
    fall back to AI transcription."""

    mode: ModeOrStr = Mode.AUTO
    """Where the text may come from. "captions" reads an existing caption track and fails if there is none, which is the
    only way to avoid audio transcription. "audio" skips captions and transcribes the audio. "auto" (the default) tries
    captions first and transcribes the audio when there are none. Short media may finish inline after a wait of up to 45
    seconds; longer work returns 202 with a job to poll or deliver by callback. Audio is charged only on delivery: 1
    credit per started minute of audio, minimum 1 (a 20-minute video is 20; the 4-hour cap is 240). Caption fetches are
    always 1 credit."""

    timestamps: Optional[Timestamps1] = UNSET
    """Which form the transcript comes back in. true (the default) returns the ``segments`` array, each with start,
    duration and text (podcast episodes transcribed from audio may also carry a ``speaker`` id per segment - see the
    podcast notes). false returns a single joined ``text`` string instead. On the single-transcript 200 exactly one of
    the two is present, never both, since segments already contain every word the joined text does; job results and
    batch entries carry both text and segments. The older strings "segment" and "none" mean the same two things and are
    still accepted."""

    callback_url: Optional[str] = UNSET
    """Where to POST the finished transcript when a request escalates to audio transcription, instead of polling the
    job. The delivery body is a trimmed envelope - {ok, status, job_id, data} on success, {ok, status, job_id, error} on
    failure - without the usage and request_id the poll URL adds. When a signing secret is configured on our side, the
    body is signed with HMAC-SHA256 over the exact bytes and sent as an X-TranscriptFetch-Signature: sha256=<hex> header
    so you can verify it came from us. Must be a public https URL on the standard port; the URL is checked again at
    delivery time, so an unreachable or private address still gets a 202 but never receives a delivery. The job stays
    pollable either way, so a missed delivery is never a lost transcript."""

    ai_fallback: bool = False
    """Legacy alias for "mode", still supported. true is identical to "mode": "audio"; omitted or false is "mode":
    "auto". Send one or the other, not both. Note that false never disabled the fallback - audio was still transcribed
    when no captions existed - which is why the field was replaced."""


class VideoRequestDict(TypedDict):
    video: str
    mode: NotRequired[ModeOrStr]
    timestamps: NotRequired[Timestamps1Dict]
    callback_url: NotRequired[str]
    ai_fallback: NotRequired[bool]
