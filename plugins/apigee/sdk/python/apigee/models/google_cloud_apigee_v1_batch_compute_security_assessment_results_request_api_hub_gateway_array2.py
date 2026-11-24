from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2(SdkBaseModel):
    """An array of API Hub Gateways to assess. A maximum of 3 gateways can be assessed."""

    gateways: Optional[list[str]] = UNSET
    """Required. The array of API Hub Gateway IDs. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Dict(TypedDict):
    gateways: NotRequired[list[str]]
