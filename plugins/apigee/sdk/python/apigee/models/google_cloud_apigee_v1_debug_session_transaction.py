from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_point import GoogleCloudApigeeV1Point, GoogleCloudApigeeV1PointDict


class GoogleCloudApigeeV1DebugSessionTransaction(SdkBaseModel):
    """A transaction contains all of the debug information of the entire message flow of an API call processed by the
    runtime plane. The information is collected and recorded at critical points of the message flow in the runtime
    apiproxy."""

    completed: Optional[bool] = UNSET
    """Flag indicating whether a transaction is completed or not"""

    point: Optional[list[GoogleCloudApigeeV1Point]] = UNSET
    """List of debug data collected by runtime plane at various defined points in the flow."""


class GoogleCloudApigeeV1DebugSessionTransactionDict(TypedDict):
    completed: NotRequired[bool]
    point: NotRequired[list[GoogleCloudApigeeV1PointDict]]
