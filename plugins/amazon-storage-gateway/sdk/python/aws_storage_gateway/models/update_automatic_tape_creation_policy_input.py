from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .automatic_tape_creation_rule import AutomaticTapeCreationRule, AutomaticTapeCreationRuleDict


class UpdateAutomaticTapeCreationPolicyInput(SdkBaseModel):
    automatic_tape_creation_rules: list[AutomaticTapeCreationRule] = Field(alias="AutomaticTapeCreationRules")
    """An automatic tape creation policy consists of a list of automatic tape creation rules. The rules determine when
    and how to automatically create new tapes."""

    gateway_arn: str = Field(alias="GatewayARN")


class UpdateAutomaticTapeCreationPolicyInputDict(TypedDict):
    automatic_tape_creation_rules: list[AutomaticTapeCreationRuleDict]
    gateway_arn: str
