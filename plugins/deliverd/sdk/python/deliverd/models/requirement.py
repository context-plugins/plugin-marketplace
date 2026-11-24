from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .applies_when import AppliesWhen, AppliesWhenDict


class Requirement(SdkBaseModel):
    ref: str
    """The framework's own reference, e.g. 4.2 or UW-1"""

    title: str
    """What it asks, in a sentence"""

    controls: list[str]
    """Controls that evidence it: common ones or your own custom_ controls"""

    applies_when: Optional[AppliesWhen] = Field(default=UNSET, alias="appliesWhen")
    """Conditions on the governance profile; every one given must hold"""


class RequirementDict(TypedDict):
    ref: str
    title: str
    controls: list[str]
    applies_when: NotRequired[AppliesWhenDict]
