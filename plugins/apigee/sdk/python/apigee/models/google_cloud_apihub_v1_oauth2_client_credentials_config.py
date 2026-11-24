from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_secret1 import GoogleCloudApihubV1Secret1, GoogleCloudApihubV1Secret1Dict


class GoogleCloudApihubV1Oauth2ClientCredentialsConfig(SdkBaseModel):
    """Parameters to support Oauth 2.0 client credentials grant authentication. See
    https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. The client identifier."""

    client_secret: Optional[GoogleCloudApihubV1Secret1] = Field(default=UNSET, alias="clientSecret")
    """Required. Secret version reference containing the client secret. The ``secretmanager.versions.access`` permission
    should be granted to the service account accessing the secret."""


class GoogleCloudApihubV1Oauth2ClientCredentialsConfigDict(TypedDict):
    client_id: NotRequired[str]
    client_secret: NotRequired[GoogleCloudApihubV1Secret1Dict]
