from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1CompleteRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    query: str
    """The partial text to continue, at most 200 characters. Send the end of what the user has typed, not the whole
    document."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    session_id: Optional[str] = UNSET
    """Optional stable identifier for the document or conversation being written."""


class ApiV1CompleteRequestDict(TypedDict):
    key: NotRequired[str]
    query: str
    return_usage: NotRequired[bool]
    session_id: NotRequired[str]
