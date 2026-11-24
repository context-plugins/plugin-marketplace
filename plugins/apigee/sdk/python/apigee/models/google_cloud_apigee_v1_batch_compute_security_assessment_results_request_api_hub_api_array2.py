from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2(SdkBaseModel):
    """An array of API Hub APIs to assess. A maximum of 1 API can be assessed."""

    apis: Optional[list[str]] = UNSET
    """Required. The array of API Hub API IDs. Format: ``projects/{project}/locations/{location}/apis/{api}``"""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Dict(TypedDict):
    apis: NotRequired[list[str]]
