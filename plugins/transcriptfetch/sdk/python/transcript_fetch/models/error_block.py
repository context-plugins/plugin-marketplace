from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code1 import Code1OrStr
from .enums.number import NumberOrInt


class ErrorBlock(SdkBaseModel):
    """Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands
    digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff).
    At most one of retry_with, details, issues is present. Failures are never charged."""

    code: Code1OrStr
    number: NumberOrInt
    message: str
    """Prose for humans. Never parse it."""

    docs: str
    """https://transcriptfetch.com/docs/errors/<code>"""

    retry_with: Optional[Any] = UNSET
    """Present when a different request would succeed: the fields to change, e.g. { "mode": "audio" } to transcribe a
    captionless video, or { "endpoint": "/api/v2/transcripts/video" } for a platform this endpoint does not list."""

    details: Optional[Any] = UNSET
    """Structured specifics for the few codes that document one: batch_too_large { max, sent }, podcast_feed_not_found {
    reason, candidates? }."""

    issues: Optional[list[Any]] = UNSET
    """Field-level validation problems (invalid_request only)."""


class ErrorBlockDict(TypedDict):
    code: Code1OrStr
    number: NumberOrInt
    message: str
    docs: str
    retry_with: NotRequired[Any]
    details: NotRequired[Any]
    issues: NotRequired[list[Any]]
