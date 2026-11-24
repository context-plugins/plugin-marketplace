from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.variety import VarietyOrStr


class ApiV1EditsRequest(SdkBaseModel):
    auto_apply: Optional[bool] = UNSET
    """If true, the response includes applied_text with all edits applied to the input."""

    include_error_categories: Optional[bool] = UNSET
    """Defaults to true. If false, edits omit error_type, general_error_type and classifier-generated descriptions;
    corrections, offsets, IDs and applied_text are unchanged."""

    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    lang: Optional[str] = UNSET
    """ISO 639-1 language code of the text (e.g. "en", "de", "fr"). Defaults to "en"."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    session_id: Optional[str] = UNSET
    """Optional stable identifier for the document or conversation being checked. Reuse the same value when re-checking
    the same document."""

    text: str
    """The text to process. Plain text or HTML (tags are handled server-side)."""

    variety: Optional[VarietyOrStr] = UNSET
    """English variety to enforce, e.g. "us-variety" or "gb-variety". Optional."""


class ApiV1EditsRequestDict(TypedDict):
    auto_apply: NotRequired[bool]
    include_error_categories: NotRequired[bool]
    key: NotRequired[str]
    lang: NotRequired[str]
    return_usage: NotRequired[bool]
    session_id: NotRequired[str]
    text: str
    variety: NotRequired[VarietyOrStr]
