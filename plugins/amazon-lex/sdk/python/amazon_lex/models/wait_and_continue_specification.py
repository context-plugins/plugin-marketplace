from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_specification import ResponseSpecification, ResponseSpecificationDict
from .still_waiting_response_specification import (
    StillWaitingResponseSpecification,
    StillWaitingResponseSpecificationDict,
)


class WaitAndContinueSpecification(SdkBaseModel):
    waiting_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="waitingResponse")
    continue_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="continueResponse")
    still_waiting_response: Optional[StillWaitingResponseSpecification] = Field(
        default=UNSET, alias="stillWaitingResponse"
    )
    active: Optional[bool] = UNSET
    """Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses
    for a slot aren't used. If the active field isn't specified, the default is true."""


class WaitAndContinueSpecificationDict(TypedDict):
    waiting_response: NotRequired[ResponseSpecificationDict]
    continue_response: NotRequired[ResponseSpecificationDict]
    still_waiting_response: NotRequired[StillWaitingResponseSpecificationDict]
    active: NotRequired[bool]
