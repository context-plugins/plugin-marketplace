from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1UrlAidetectRequest(SdkBaseModel):
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
    """Language of the page: en, de, es, fr, it, ja, nl or pt. Omit (or "auto") to detect it; other languages are
    rejected."""

    return_usage: bool = False
    """When true, a successful JSON-object response additionally carries "usage": {"characters": <n>} — the billable
    character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is
    included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window
    are still counted here even though they are not re-charged, so the number is an upper bound on the final charge.
    Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing
    usage field (such as account/status or completion token usage) is preserved unchanged."""

    score_string: Optional[bool] = UNSET
    """Also return score_string, an HTML rendering of the scored text highlighted by score (default false)."""

    sent_scores: Optional[bool] = UNSET
    """Include per-sentence scores (default true)."""

    url: str
    """The http(s) URL of the page or document to check. A bare host/path gets https://."""

    version: Optional[str] = UNSET
    """Pin a detector model version. Omit for the default."""

    zero_retention: Optional[bool] = UNSET
    """Keep no copy of the text: the result is not cached (so no certificate hash), and usage is logged without the
    text. Default false; always on for teams with data retention disabled."""


class ApiV1UrlAidetectRequestDict(TypedDict):
    create_report: NotRequired[bool]
    key: NotRequired[str]
    lang: NotRequired[str]
    return_usage: NotRequired[bool]
    score_string: NotRequired[bool]
    sent_scores: NotRequired[bool]
    url: str
    version: NotRequired[str]
    zero_retention: NotRequired[bool]
