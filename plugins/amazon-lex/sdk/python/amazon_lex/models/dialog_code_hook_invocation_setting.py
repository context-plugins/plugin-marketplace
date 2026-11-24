from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .post_dialog_code_hook_invocation_specification import (
    PostDialogCodeHookInvocationSpecification,
    PostDialogCodeHookInvocationSpecificationDict,
)


class DialogCodeHookInvocationSetting(SdkBaseModel):
    enable_code_hook_invocation: bool = Field(alias="enableCodeHookInvocation")
    """Indicates whether a Lambda function should be invoked for the dialog."""

    active: bool
    """Determines whether a dialog code hook is used when the intent is activated."""

    invocation_label: Optional[str] = Field(default=UNSET, alias="invocationLabel")
    """A label that indicates the dialog step from which the dialog code hook is happening."""

    post_code_hook_specification: PostDialogCodeHookInvocationSpecification = Field(alias="postCodeHookSpecification")


class DialogCodeHookInvocationSettingDict(TypedDict):
    enable_code_hook_invocation: bool
    active: bool
    invocation_label: NotRequired[str]
    post_code_hook_specification: PostDialogCodeHookInvocationSpecificationDict
