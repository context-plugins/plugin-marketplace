from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .display_rules import DisplayRules, DisplayRulesDict


class TeamDisplayRulesResponse(SdkBaseModel):
    display_rules: Optional[DisplayRules] = Field(default=UNSET, alias="displayRules")


class TeamDisplayRulesResponseDict(TypedDict):
    display_rules: NotRequired[DisplayRulesDict]
