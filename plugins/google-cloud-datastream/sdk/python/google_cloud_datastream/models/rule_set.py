from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customization_rule import CustomizationRule, CustomizationRuleDict
from .object_filter1 import ObjectFilter1, ObjectFilter1Dict


class RuleSet(SdkBaseModel):
    """A set of rules to apply to a set of objects."""

    customization_rules: Optional[list[CustomizationRule]] = Field(default=UNSET, alias="customizationRules")
    """Required. List of customization rules to apply."""

    object_filter: Optional[ObjectFilter1] = Field(default=UNSET, alias="objectFilter")
    """Required. Object filter to apply the customization rules to."""


class RuleSetDict(TypedDict):
    customization_rules: NotRequired[list[CustomizationRuleDict]]
    object_filter: NotRequired[ObjectFilter1Dict]
