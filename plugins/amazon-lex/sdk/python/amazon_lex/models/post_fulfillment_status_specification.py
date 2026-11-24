from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conditional_specification import ConditionalSpecification, ConditionalSpecificationDict
from .dialog_state import DialogState, DialogStateDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class PostFulfillmentStatusSpecification(SdkBaseModel):
    success_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="successResponse")
    failure_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="failureResponse")
    timeout_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="timeoutResponse")
    success_next_step: Optional[DialogState] = Field(default=UNSET, alias="successNextStep")
    success_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="successConditional")
    failure_next_step: Optional[DialogState] = Field(default=UNSET, alias="failureNextStep")
    failure_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="failureConditional")
    timeout_next_step: Optional[DialogState] = Field(default=UNSET, alias="timeoutNextStep")
    timeout_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="timeoutConditional")


class PostFulfillmentStatusSpecificationDict(TypedDict):
    success_response: NotRequired[ResponseSpecificationDict]
    failure_response: NotRequired[ResponseSpecificationDict]
    timeout_response: NotRequired[ResponseSpecificationDict]
    success_next_step: NotRequired[DialogStateDict]
    success_conditional: NotRequired[ConditionalSpecificationDict]
    failure_next_step: NotRequired[DialogStateDict]
    failure_conditional: NotRequired[ConditionalSpecificationDict]
    timeout_next_step: NotRequired[DialogStateDict]
    timeout_conditional: NotRequired[ConditionalSpecificationDict]
