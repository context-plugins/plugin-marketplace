from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ruleset import Ruleset, RulesetDict
from .usage import Usage, UsageDict


class ApiV1StyleguideRulesetsResponse1(SdkBaseModel):
    rulesets: Optional[list[Ruleset]] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1StyleguideRulesetsResponse1Dict(TypedDict):
    rulesets: NotRequired[list[RulesetDict]]
    usage: NotRequired[UsageDict]
