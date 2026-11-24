from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray(SdkBaseModel):
    """Message for the array of API Hub Gateways."""

    gateways: Optional[list[str]] = UNSET
    """Required. The array of API Hub Gateway IDs. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArrayDict(TypedDict):
    gateways: NotRequired[list[str]]
