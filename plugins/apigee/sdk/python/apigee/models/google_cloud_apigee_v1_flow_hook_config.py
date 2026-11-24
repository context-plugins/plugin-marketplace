from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1FlowHookConfig(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the flow hook in the following format: ``organizations/{org}/environments/{env}/flowhooks/{point}``.
    Valid ``point`` values include: ``PreProxyFlowHook``, ``PostProxyFlowHook``, ``PreTargetFlowHook``, and
    ``PostTargetFlowHook``"""

    shared_flow_name: Optional[str] = Field(default=UNSET, alias="sharedFlowName")
    """Name of the shared flow to invoke in the following format: ``organizations/{org}/sharedflows/{sharedflow}``"""

    continue_on_error: Optional[bool] = Field(default=UNSET, alias="continueOnError")
    """Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to ``true`` (continue
    on error)."""


class GoogleCloudApigeeV1FlowHookConfigDict(TypedDict):
    name: NotRequired[str]
    shared_flow_name: NotRequired[str]
    continue_on_error: NotRequired[bool]
