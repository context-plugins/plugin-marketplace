from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conditional_specification import ConditionalSpecification, ConditionalSpecificationDict
from .dialog_code_hook_invocation_setting import DialogCodeHookInvocationSetting, DialogCodeHookInvocationSettingDict
from .dialog_state import DialogState, DialogStateDict
from .response_specification import ResponseSpecification, ResponseSpecificationDict


class InitialResponseSetting(SdkBaseModel):
    initial_response: Optional[ResponseSpecification] = Field(default=UNSET, alias="initialResponse")
    next_step: Optional[DialogState] = Field(default=UNSET, alias="nextStep")
    conditional: Optional[ConditionalSpecification] = UNSET
    code_hook: Optional[DialogCodeHookInvocationSetting] = Field(default=UNSET, alias="codeHook")


class InitialResponseSettingDict(TypedDict):
    initial_response: NotRequired[ResponseSpecificationDict]
    next_step: NotRequired[DialogStateDict]
    conditional: NotRequired[ConditionalSpecificationDict]
    code_hook: NotRequired[DialogCodeHookInvocationSettingDict]
