from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dialog_state import DialogState, DialogStateDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class DefaultConditionalBranch(SdkBaseModel):
    next_step: Optional[DialogState] = Field(default=UNSET, alias="nextStep")
    response: Optional[ResponseSpecification] = UNSET


class DefaultConditionalBranchDict(TypedDict):
    next_step: NotRequired[DialogStateDict]
    response: NotRequired[ResponseSpecificationDict]
