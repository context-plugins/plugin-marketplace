from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reading_level import ReadingLevelOrStr


class ApiV1SimplifyRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    lang: Optional[str] = UNSET
    """ISO 639-1 code used to pick the readability formula for the before/after scores and the billed language. Omit for
    auto-detection (falls back to "en"). The rewrite itself always stays in the text's own language."""

    preserve_terms: Optional[list[str]] = UNSET
    """Terms the rewrite must keep exactly as written (product names, defined legal terms)."""

    reading_level: Optional[ReadingLevelOrStr] = UNSET
    """Target audience: "plain" (plain-language style for a general audience, the default), "elementary" (~US grade
    3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10)."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    text: str
    """The text to simplify. Sent to the model as-is — markup and line structure are preserved, not stripped."""

    texts: Optional[list[str]] = UNSET
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""


class ApiV1SimplifyRequestDict(TypedDict):
    key: NotRequired[str]
    lang: NotRequired[str]
    preserve_terms: NotRequired[list[str]]
    reading_level: NotRequired[ReadingLevelOrStr]
    return_usage: NotRequired[bool]
    text: str
    texts: NotRequired[list[str]]
