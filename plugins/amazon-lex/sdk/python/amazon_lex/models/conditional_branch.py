from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .condition import Condition, ConditionDict
from .dialog_state import DialogState, DialogStateDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class ConditionalBranch(SdkBaseModel):
    name: str
    """The name of the branch."""

    condition: Condition
    next_step: DialogState = Field(alias="nextStep")
    response: Optional[ResponseSpecification] = UNSET


class ConditionalBranchDict(TypedDict):
    name: str
    condition: ConditionDict
    next_step: DialogStateDict
    response: NotRequired[ResponseSpecificationDict]
