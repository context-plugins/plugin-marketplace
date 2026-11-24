from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code1(str, Enum):
    INVALID_REQUEST = "invalid_request"
    INVALID_CURSOR = "invalid_cursor"
    UNAUTHORIZED = "unauthorized"
    IDEMPOTENCY_CONFLICT = "idempotency_conflict"
    NOT_FOUND = "not_found"
    INSUFFICIENT_CREDITS = "insufficient_credits"
    BATCH_TOO_LARGE = "batch_too_large"
    RATE_LIMITED = "rate_limited"
    UNSUPPORTED_PLATFORM = "unsupported_platform"
    ENDPOINT_PLATFORM_MISMATCH = "endpoint_platform_mismatch"
    PODCAST_FEED_NOT_FOUND = "podcast_feed_not_found"
    AUDIO_INELIGIBLE = "audio_ineligible"
    INVALID_INPUT = "invalid_input"
    AUDIO_TOO_LONG = "audio_too_long"
    DRM_PROTECTED = "drm_protected"
    PRIVATE = "private"
    UNAVAILABLE = "unavailable"
    MEMBERS_ONLY = "members_only"
    AGE_RESTRICTED = "age_restricted"
    REGION_BLOCKED = "region_blocked"
    LIVE_STREAM = "live_stream"
    WAS_LIVE = "was_live"
    NO_CAPTIONS = "no_captions"
    CAPTIONS_DISABLED = "captions_disabled"
    NO_SPEECH = "no_speech"
    NO_AUDIO_STREAM = "no_audio_stream"
    UPSTREAM_ERROR = "upstream_error"
    TIMEOUT = "timeout"
    CONNECTION = "connection"
    PROXY_UNAVAILABLE = "proxy_unavailable"
    PARSE_ERROR = "parse_error"
    UPSTREAM_UNAVAILABLE = "upstream_unavailable"
    INTERNAL_ERROR = "internal_error"
    UNKNOWN = "unknown"

    __str__ = str.__str__


Code1OrStr: TypeAlias = Annotated[Code1 | str, open_enum_validator(Code1)]
