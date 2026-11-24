from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conditional_specification import ConditionalSpecification, ConditionalSpecificationDict
from .dialog_code_hook_invocation_setting import DialogCodeHookInvocationSetting, DialogCodeHookInvocationSettingDict
from .dialog_state import DialogState, DialogStateDict
from .elicitation_code_hook_invocation_setting import (
    ElicitationCodeHookInvocationSetting,
    ElicitationCodeHookInvocationSettingDict,
)
from .prompt_specification import PromptSpecification, PromptSpecificationDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class IntentConfirmationSetting(SdkBaseModel):
    prompt_specification: Optional[PromptSpecification] = Field(default=UNSET, alias="promptSpecification")
    declination_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="declinationResponse")
    active: Optional[bool] = UNSET
    """Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and
    declination responses aren't sent. If the active field isn't specified, the default is true."""

    confirmation_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="confirmationResponse")
    confirmation_next_step: Optional[DialogState] = Field(default=UNSET, alias="confirmationNextStep")
    confirmation_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="confirmationConditional")
    declination_next_step: Optional[DialogState] = Field(default=UNSET, alias="declinationNextStep")
    declination_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="declinationConditional")
    failure_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="failureResponse")
    failure_next_step: Optional[DialogState] = Field(default=UNSET, alias="failureNextStep")
    failure_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="failureConditional")
    code_hook: Optional[DialogCodeHookInvocationSetting] = Field(default=UNSET, alias="codeHook")
    elicitation_code_hook: Optional[ElicitationCodeHookInvocationSetting] = Field(
        default=UNSET, alias="elicitationCodeHook"
    )


class IntentConfirmationSettingDict(TypedDict):
    prompt_specification: NotRequired[PromptSpecificationDict]
    declination_response: NotRequired[ResponseSpecificationDict]
    active: NotRequired[bool]
    confirmation_response: NotRequired[ResponseSpecificationDict]
    confirmation_next_step: NotRequired[DialogStateDict]
    confirmation_conditional: NotRequired[ConditionalSpecificationDict]
    declination_next_step: NotRequired[DialogStateDict]
    declination_conditional: NotRequired[ConditionalSpecificationDict]
    failure_response: NotRequired[ResponseSpecificationDict]
    failure_next_step: NotRequired[DialogStateDict]
    failure_conditional: NotRequired[ConditionalSpecificationDict]
    code_hook: NotRequired[DialogCodeHookInvocationSettingDict]
    elicitation_code_hook: NotRequired[ElicitationCodeHookInvocationSettingDict]
