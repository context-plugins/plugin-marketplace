from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auth_type import AuthTypeOrStr
from .google_cloud_apihub_v1_api_key_config1 import (
    GoogleCloudApihubV1ApiKeyConfig1,
    GoogleCloudApihubV1ApiKeyConfig1Dict,
)
from .google_cloud_apihub_v1_google_service_account_config1 import (
    GoogleCloudApihubV1GoogleServiceAccountConfig1,
    GoogleCloudApihubV1GoogleServiceAccountConfig1Dict,
)
from .google_cloud_apihub_v1_oauth2_client_credentials_config1 import (
    GoogleCloudApihubV1Oauth2ClientCredentialsConfig1,
    GoogleCloudApihubV1Oauth2ClientCredentialsConfig1Dict,
)
from .google_cloud_apihub_v1_user_password_config2 import (
    GoogleCloudApihubV1UserPasswordConfig2,
    GoogleCloudApihubV1UserPasswordConfig2Dict,
)


class GoogleCloudApihubV1AuthConfig1(SdkBaseModel):
    """Optional. The authentication information for this plugin instance."""

    google_service_account_config: Optional[GoogleCloudApihubV1GoogleServiceAccountConfig1] = Field(
        default=UNSET, alias="googleServiceAccountConfig"
    )
    """Google Service Account."""

    oauth2_client_credentials_config: Optional[GoogleCloudApihubV1Oauth2ClientCredentialsConfig1] = Field(
        default=UNSET, alias="oauth2ClientCredentialsConfig"
    )
    """Oauth2.0 Client Credentials."""

    api_key_config: Optional[GoogleCloudApihubV1ApiKeyConfig1] = Field(default=UNSET, alias="apiKeyConfig")
    """Api Key Config."""

    user_password_config: Optional[GoogleCloudApihubV1UserPasswordConfig2] = Field(
        default=UNSET, alias="userPasswordConfig"
    )
    """User Password."""

    auth_type: Optional[AuthTypeOrStr] = Field(default=UNSET, alias="authType")
    """Required. The authentication type."""


class GoogleCloudApihubV1AuthConfig1Dict(TypedDict):
    google_service_account_config: NotRequired[GoogleCloudApihubV1GoogleServiceAccountConfig1Dict]
    oauth2_client_credentials_config: NotRequired[GoogleCloudApihubV1Oauth2ClientCredentialsConfig1Dict]
    api_key_config: NotRequired[GoogleCloudApihubV1ApiKeyConfig1Dict]
    user_password_config: NotRequired[GoogleCloudApihubV1UserPasswordConfig2Dict]
    auth_type: NotRequired[AuthTypeOrStr]
