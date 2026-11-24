from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_secret1 import GoogleCloudApihubV1Secret1, GoogleCloudApihubV1Secret1Dict


class GoogleCloudApihubV1Oauth2ClientCredentialsConfig1(SdkBaseModel):
    """Oauth2.0 Client Credentials."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. The client identifier."""

    client_secret: Optional[GoogleCloudApihubV1Secret1] = Field(default=UNSET, alias="clientSecret")
    """Required. Secret version reference containing the client secret. The ``secretmanager.versions.access`` permission
    should be granted to the service account accessing the secret."""


class GoogleCloudApihubV1Oauth2ClientCredentialsConfig1Dict(TypedDict):
    client_id: NotRequired[str]
    client_secret: NotRequired[GoogleCloudApihubV1Secret1Dict]
