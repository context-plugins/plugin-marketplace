from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.field1 import Field1, Field1Dict


class ApiV1ExtractRequest1(SdkBaseModel):
    context: Optional[str] = UNSET
    """Optional guidance (max 500 chars): what the document is and how to read ambiguous fields."""

    fields: Optional[list[Field1]] = UNSET
    """The fields to extract (1-20): field names (<=50 chars), or {name, type, description (<=200 chars), required}
    objects. A short description per field sharpens ambiguous ones. Names must be unique."""

    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    text: Optional[str] = UNSET
    """The text to process. Plain text or HTML (tags are handled server-side)."""

    texts: list[str]
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""


class ApiV1ExtractRequest1Dict(TypedDict):
    context: NotRequired[str]
    fields: NotRequired[list[Field1Dict]]
    key: NotRequired[str]
    return_usage: NotRequired[bool]
    text: NotRequired[str]
    texts: list[str]
