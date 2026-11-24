from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_application_integration_endpoint_details1 import (
    GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1,
    GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1Dict,
)


class GoogleCloudApihubV1Endpoint(SdkBaseModel):
    """The endpoint to be triggered for curation. The endpoint will be invoked with a request payload containing
    ApiMetadata. Response should contain curated data in the form of ApiMetadata."""

    application_integration_endpoint_details: Optional[
        GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1
    ] = Field(default=UNSET, alias="applicationIntegrationEndpointDetails")
    """Required. The details of the Application Integration endpoint to be triggered for curation."""


class GoogleCloudApihubV1EndpointDict(TypedDict):
    application_integration_endpoint_details: NotRequired[GoogleCloudApihubV1ApplicationIntegrationEndpointDetails1Dict]
