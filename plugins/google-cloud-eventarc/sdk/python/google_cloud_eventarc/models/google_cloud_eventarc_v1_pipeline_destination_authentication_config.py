from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_eventarc_v1_pipeline_destination_authentication_config_o_auth_token1 import (
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1,
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1Dict,
)
from .google_cloud_eventarc_v1_pipeline_destination_authentication_config_oidc_token2 import (
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2,
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2Dict,
)


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig(SdkBaseModel):
    """Represents a config used to authenticate message requests."""

    oauth_token: Optional[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1] = Field(
        default=UNSET, alias="oauthToken"
    )
    """Optional. If specified, an `OAuth token <https://developers.google.com/identity/protocols/OAuth2>`__ will be
    generated and attached as an ``Authorization`` header in the HTTP request. This type of authorization should
    generally only be used when calling Google APIs hosted on *.googleapis.com."""

    google_oidc: Optional[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2] = Field(
        default=UNSET, alias="googleOidc"
    )
    """Optional. This authenticate method will apply Google OIDC tokens signed by a Google Cloud service account to the
    requests."""


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigDict(TypedDict):
    oauth_token: NotRequired[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken1Dict]
    google_oidc: NotRequired[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken2Dict]
