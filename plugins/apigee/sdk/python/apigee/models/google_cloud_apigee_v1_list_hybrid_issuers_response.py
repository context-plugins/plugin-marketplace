from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_service_issuers_mapping import (
    GoogleCloudApigeeV1ServiceIssuersMapping,
    GoogleCloudApigeeV1ServiceIssuersMappingDict,
)


class GoogleCloudApigeeV1ListHybridIssuersResponse(SdkBaseModel):
    issuers: Optional[list[GoogleCloudApigeeV1ServiceIssuersMapping]] = UNSET
    """Lists of hybrid services and its trusted issuer email ids."""


class GoogleCloudApigeeV1ListHybridIssuersResponseDict(TypedDict):
    issuers: NotRequired[list[GoogleCloudApigeeV1ServiceIssuersMappingDict]]
