from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_application_integration_endpoint_details1 import (
    GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1,
    GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1Dict,
)


class GoogleCloudApihubV1Endpoint1(SdkBaseModel):
    """Required. The endpoint to be triggered for curation."""

    application_integration_endpoint_details: Optional[
        GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1
    ] = Field(default=UNSET, alias="applicationIntegrationEndpointDetails")
    """Required. The details of the Application Integration endpoint to be triggered for curation."""


class GoogleCloudApihubV1Endpoint1Dict(TypedDict):
    application_integration_endpoint_details: NotRequired[GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1Dict]
