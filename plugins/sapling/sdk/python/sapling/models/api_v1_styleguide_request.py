from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.rule3 import Rule3, Rule3Dict


class ApiV1StyleguideRequest(SdkBaseModel):
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

    rules: list[Rule3]
    """The style rules to enforce: 1-20 rules, each a rule name string (at most 80 characters) or a {name, description}
    object (description at most 400 characters adds nuance the model follows). Names must be unique
    case-insensitively."""

    ruleset: Optional[str] = UNSET
    """The name of a saved ruleset (created via POST /api/v1/styleguide/rulesets) to check against in place of inline
    rules. Matched case-insensitively within the API key's account (its team, for team keys). Provide exactly one of
    rules or ruleset."""

    text: str
    """The text to check. Checked as submitted — markup is not stripped."""

    texts: Optional[list[str]] = UNSET
    """Batch form: 1 to 10 texts, each processed with the same options as a single request. Send exactly one of ``text``
    or ``texts``; the response is then {"results": [...]}, one single-text response per input text in input order. Size
    limits are on the endpoint's docs page -- most cap the combined length of all items at the single-text limit."""


class ApiV1StyleguideRequestDict(TypedDict):
    key: NotRequired[str]
    return_usage: NotRequired[bool]
    rules: list[Rule3Dict]
    ruleset: NotRequired[str]
    text: str
    texts: NotRequired[list[str]]
