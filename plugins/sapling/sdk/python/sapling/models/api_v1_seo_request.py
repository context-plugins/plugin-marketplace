from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1SeoRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    keywords: Optional[list[str]] = UNSET
    """Target keyword phrases, most important first (max 10). Each is measured in the text and steered into the
    suggestions."""

    lang: Optional[str] = UNSET
    """ISO 639-1 language code of the text (default "en"). Selects the readability formulas; supported for en, de, es,
    fr, it, nl, pl, ru — other codes are accepted and get null readability."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    suggestions: Optional[bool] = UNSET
    """Generate titles/meta descriptions/slug/keywords with the LLM (default true). false = deterministic stats only."""

    text: str
    """The text to process. Plain text or HTML (tags are handled server-side)."""


class ApiV1SeoRequestDict(TypedDict):
    key: NotRequired[str]
    keywords: NotRequired[list[str]]
    lang: NotRequired[str]
    return_usage: NotRequired[bool]
    suggestions: NotRequired[bool]
    text: str
