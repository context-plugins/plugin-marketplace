from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automatic_tape_creation_rule import AutomaticTapeCreationRule, AutomaticTapeCreationRuleDict


class AutomaticTapeCreationPolicyInfo(SdkBaseModel):
    automatic_tape_creation_rules: Optional[list[AutomaticTapeCreationRule]] = Field(
        default=UNSET, alias="AutomaticTapeCreationRules"
    )
    """An automatic tape creation policy consists of a list of automatic tape creation rules. This returns the rules
    that determine when and how to automatically create new tapes."""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class AutomaticTapeCreationPolicyInfoDict(TypedDict):
    automatic_tape_creation_rules: NotRequired[list[AutomaticTapeCreationRuleDict]]
    gateway_arn: NotRequired[str]
