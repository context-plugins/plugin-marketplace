from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1IngestChunkTextRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    max_length: int
    """Maximum chunk length in characters. Required in practice: omitting it answers 400."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    step_size: int = 0
    """Characters to advance between chunk starts; 0 means 10% of max_length."""

    text: str


class ApiV1IngestChunkTextRequestDict(TypedDict):
    key: NotRequired[str]
    max_length: int
    return_usage: NotRequired[bool]
    step_size: NotRequired[int]
    text: str
