from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ElicitationCodeHookInvocationSetting(SdkBaseModel):
    enable_code_hook_invocation: bool = Field(alias="enableCodeHookInvocation")
    """Indicates whether a Lambda function should be invoked for the dialog."""

    invocation_label: Optional[str] = Field(default=UNSET, alias="invocationLabel")
    """A label that indicates the dialog step from which the dialog code hook is happening."""


class ElicitationCodeHookInvocationSettingDict(TypedDict):
    enable_code_hook_invocation: bool
    invocation_label: NotRequired[str]
