from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.category import CategoryOrStr


class ApiV1InclusiveRequest1(SdkBaseModel):
    categories: Optional[list[CategoryOrStr]] = UNSET
    """Categories to check. Default: all of them."""

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
    """The text to check. Checked as submitted — markup is not stripped."""

    texts: list[str]
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""


class ApiV1InclusiveRequest1Dict(TypedDict):
    categories: NotRequired[list[CategoryOrStr]]
    key: NotRequired[str]
    return_usage: NotRequired[bool]
    text: NotRequired[str]
    texts: list[str]
