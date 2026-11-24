from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray(SdkBaseModel):
    """Message for the array of API Hub APIs."""

    apis: Optional[list[str]] = UNSET
    """Required. The array of API Hub API IDs. Format: ``projects/{project}/locations/{location}/apis/{api}``"""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArrayDict(TypedDict):
    apis: NotRequired[list[str]]
