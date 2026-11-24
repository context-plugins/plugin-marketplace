from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_shared_flow import GoogleCloudApigeeV1SharedFlow, GoogleCloudApigeeV1SharedFlowDict


class GoogleCloudApigeeV1ListSharedFlowsResponse(SdkBaseModel):
    shared_flows: Optional[list[GoogleCloudApigeeV1SharedFlow]] = Field(default=UNSET, alias="sharedFlows")


class GoogleCloudApigeeV1ListSharedFlowsResponseDict(TypedDict):
    shared_flows: NotRequired[list[GoogleCloudApigeeV1SharedFlowDict]]
