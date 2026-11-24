from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1AidetectRequest(SdkBaseModel):
    create_report: bool = False
    """Also save the result as a shareable report and return its link in report (a single text only, not texts). The
    report is saved to your AI detector history, where you can revoke the link; anyone with the link can view the text
    and its scores until it is revoked or expires 90 days after creation. Requires your private API key: OAuth access
    tokens and public API keys get 400, as does combining it with zero_retention. No report is made (report is null, see
    report_skip_reason) when your team keeps no data, AI detector history or text retention is turned off, or the
    account email is unconfirmed; the request is still scored and billed."""

    key: Optional[str] = UNSET
    """Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are sent, the body key
    takes precedence over the header."""

    lang: Optional[str] = UNSET
    """Language of the text: en, de, es, fr, it, ja, nl or pt. Omit (or "auto") to detect it; other languages are
    rejected."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    sent_scores: Optional[bool] = UNSET
    """Include per-sentence scores (default true)."""

    text: str
    """The text to process. Plain text or HTML (tags are handled server-side)."""

    texts: Optional[list[str]] = UNSET
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit.
    Requires your own API key; the public demo key is limited to the single ``text`` form."""

    zero_retention: Optional[bool] = UNSET
    """Keep no copy of the text: the result is not cached (so no certificate hash), and usage is logged without the
    text. Default false; always on for teams with data retention disabled."""


class ApiV1AidetectRequestDict(TypedDict):
    create_report: NotRequired[bool]
    key: NotRequired[str]
    lang: NotRequired[str]
    return_usage: NotRequired[bool]
    sent_scores: NotRequired[bool]
    text: str
    texts: NotRequired[list[str]]
    zero_retention: NotRequired[bool]
