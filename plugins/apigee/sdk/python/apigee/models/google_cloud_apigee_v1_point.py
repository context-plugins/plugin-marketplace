from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_result import GoogleCloudApigeeV1Result, GoogleCloudApigeeV1ResultDict


class GoogleCloudApigeeV1Point(SdkBaseModel):
    """Point is a group of information collected by runtime plane at critical points of the message flow of the
    processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category,
    debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo
    Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow
    Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition
    Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of
    results."""

    id: Optional[str] = UNSET
    """Name of a step in the transaction."""

    results: Optional[list[GoogleCloudApigeeV1Result]] = UNSET
    """List of results extracted from a given debug point."""


class GoogleCloudApigeeV1PointDict(TypedDict):
    id: NotRequired[str]
    results: NotRequired[list[GoogleCloudApigeeV1ResultDict]]
