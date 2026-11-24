from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ruleset import Ruleset, RulesetDict
from .usage import Usage, UsageDict


class ApiV1StyleguideRulesetsResponse2(SdkBaseModel):
    created: Optional[bool] = UNSET
    ruleset: Optional[Ruleset] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1StyleguideRulesetsResponse2Dict(TypedDict):
    created: NotRequired[bool]
    ruleset: NotRequired[RulesetDict]
    usage: NotRequired[UsageDict]
