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
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class SlotCaptureSetting(SdkBaseModel):
    capture_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="captureResponse")
    capture_next_step: Optional[DialogState] = Field(default=UNSET, alias="captureNextStep")
    capture_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="captureConditional")
    failure_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="failureResponse")
    failure_next_step: Optional[DialogState] = Field(default=UNSET, alias="failureNextStep")
    failure_conditional: Optional[ConditionalSpecification] = Field(default=UNSET, alias="failureConditional")
    code_hook: Optional[DialogCodeHookInvocationSetting] = Field(default=UNSET, alias="codeHook")
    elicitation_code_hook: Optional[ElicitationCodeHookInvocationSetting] = Field(
        default=UNSET, alias="elicitationCodeHook"
    )


class SlotCaptureSettingDict(TypedDict):
    capture_response: NotRequired[ResponseSpecificationDict]
    capture_next_step: NotRequired[DialogStateDict]
    capture_conditional: NotRequired[ConditionalSpecificationDict]
    failure_response: NotRequired[ResponseSpecificationDict]
    failure_next_step: NotRequired[DialogStateDict]
    failure_conditional: NotRequired[ConditionalSpecificationDict]
    code_hook: NotRequired[DialogCodeHookInvocationSettingDict]
    elicitation_code_hook: NotRequired[ElicitationCodeHookInvocationSettingDict]
