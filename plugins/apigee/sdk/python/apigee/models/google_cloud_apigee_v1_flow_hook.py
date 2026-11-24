from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1FlowHook(SdkBaseModel):
    continue_on_error: Optional[bool] = Field(default=UNSET, alias="continueOnError")
    """Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to
    ``true`` to continue execution. Set to ``false`` to stop execution if the flow hook throws an exception. Defaults to
    ``true``."""

    description: Optional[str] = UNSET
    """Description of the flow hook."""

    flow_hook_point: Optional[str] = Field(default=UNSET, alias="flowHookPoint")
    """Output only. Where in the API call flow the flow hook is invoked. Must be one of ``PreProxyFlowHook``,
    ``PostProxyFlowHook``, ``PreTargetFlowHook``, or ``PostTargetFlowHook``."""

    shared_flow: Optional[str] = Field(default=UNSET, alias="sharedFlow")
    """Shared flow attached to this flow hook, or empty if there is none attached."""


class GoogleCloudApigeeV1FlowHookDict(TypedDict):
    continue_on_error: NotRequired[bool]
    description: NotRequired[str]
    flow_hook_point: NotRequired[str]
    shared_flow: NotRequired[str]
