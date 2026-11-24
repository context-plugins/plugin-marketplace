from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    UNAUTHORIZED = "unauthorized"
    INVALID_REQUEST = "invalid_request"
    INSUFFICIENT_CREDITS = "insufficient_credits"
    RATE_LIMITED = "rate_limited"
    IDEMPOTENCY_CONFLICT = "idempotency_conflict"
    UNSUPPORTED_PLATFORM = "unsupported_platform"
    UPSTREAM_UNAVAILABLE = "upstream_unavailable"
    INTERNAL_ERROR = "internal_error"
    LIVE_STREAM = "live_stream"
    WAS_LIVE = "was_live"
    NO_AUDIO_STREAM = "no_audio_stream"
    AUDIO_TOO_LONG = "audio_too_long"
    NO_SPEECH = "no_speech"
    CAPTIONS_DISABLED = "captions_disabled"
    NO_CAPTIONS = "no_captions"
    AGE_RESTRICTED = "age_restricted"
    MEMBERS_ONLY = "members_only"
    PRIVATE = "private"
    UNAVAILABLE = "unavailable"
    BOT_GATE = "bot_gate"
    IP_BLOCKED = "ip_blocked"
    REGION_BLOCKED = "region_blocked"
    TIMEOUT = "timeout"
    UPSTREAM_ERROR = "upstream_error"
    PROXY_UNAVAILABLE = "proxy_unavailable"
    CONNECTION = "connection"
    PARSE_ERROR = "parse_error"
    INVALID_INPUT = "invalid_input"
    DRM_PROTECTED = "drm_protected"
    UNKNOWN = "unknown"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
