from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteSamplingRuleRequest(SdkBaseModel):
    rule_name: Optional[str] = Field(default=UNSET, alias="RuleName")
    """The name of the sampling rule. Specify a rule by either name or ARN, but not both."""

    rule_arn: Optional[str] = Field(default=UNSET, alias="RuleARN")
    """The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."""


class DeleteSamplingRuleRequestDict(TypedDict):
    rule_name: NotRequired[str]
    rule_arn: NotRequired[str]
