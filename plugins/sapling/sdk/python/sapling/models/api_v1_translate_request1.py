from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.formality import FormalityOrStr


class ApiV1TranslateRequest1(SdkBaseModel):
    formality: Optional[FormalityOrStr] = UNSET
    """Optional register: "formal" (vous/Sie/usted) or "informal" (tu/du/tú). Omit for the model default."""

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

    source_lang: Optional[str] = UNSET
    """Optional hint for the source language (same forms as target_lang). The text itself wins if they disagree."""

    target_lang: Optional[str] = UNSET
    """Language to translate into: ISO 639 code ("fr", "zh-TW") or English name ("French")."""

    text: Optional[str] = UNSET
    """The text to translate. Sent to the model as-is — markup and line structure are preserved, not stripped."""

    texts: list[str]
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""


class ApiV1TranslateRequest1Dict(TypedDict):
    formality: NotRequired[FormalityOrStr]
    key: NotRequired[str]
    return_usage: NotRequired[bool]
    source_lang: NotRequired[str]
    target_lang: NotRequired[str]
    text: NotRequired[str]
    texts: list[str]
