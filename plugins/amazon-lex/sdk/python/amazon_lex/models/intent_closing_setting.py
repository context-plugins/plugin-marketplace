from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conditional_specification import ConditionalSpecification, ConditionalSpecificationDict
from .dialog_state import DialogState, DialogStateDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class IntentClosingSetting(SdkBaseModel):
    closing_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="closingResponse")
    active: Optional[bool] = UNSET
    """Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent
    to the user. If the active field isn't specified, the default is true."""

    next_step: Optional[DialogState] = Field(default=UNSET, alias="nextStep")
    conditional: Optional[ConditionalSpecification] = UNSET


class IntentClosingSettingDict(TypedDict):
    closing_response: NotRequired[ResponseSpecificationDict]
    active: NotRequired[bool]
    next_step: NotRequired[DialogStateDict]
    conditional: NotRequired[ConditionalSpecificationDict]
