from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1SafetyRequest1(SdkBaseModel):
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

    spans: Optional[bool] = UNSET
    """true = also return the offending passages as spans with offsets and per-passage scores. Default false."""

    text: Optional[str] = UNSET
    """The text to process. Plain text or HTML (tags are handled server-side)."""

    texts: list[str]
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""

    threshold: Optional[float] = UNSET
    """Flagging cut-off on each category score (default 0.5)."""


class ApiV1SafetyRequest1Dict(TypedDict):
    key: NotRequired[str]
    return_usage: NotRequired[bool]
    spans: NotRequired[bool]
    text: NotRequired[str]
    texts: list[str]
    threshold: NotRequired[float]
