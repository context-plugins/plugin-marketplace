from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.supported_auth_type import SupportedAuthTypeOrStr
from .google_cloud_apihub_v1_google_service_account_config3 import (
    GoogleCloudApihubV1GoogleServiceAccountConfig3,
    GoogleCloudApihubV1GoogleServiceAccountConfig3Dict,
)


class GoogleCloudApihubV1AuthConfigTemplate(SdkBaseModel):
    """AuthConfigTemplate represents the authentication template for a plugin."""

    supported_auth_types: Optional[list[SupportedAuthTypeOrStr]] = Field(default=UNSET, alias="supportedAuthTypes")
    """Required. The list of authentication types supported by the plugin."""

    service_account: Optional[GoogleCloudApihubV1GoogleServiceAccountConfig3] = Field(
        default=UNSET, alias="serviceAccount"
    )
    """Optional. The service account of the plugin hosting service. This service account should be granted the required
    permissions on the Auth Config parameters provided while creating the plugin instances corresponding to this plugin.
    For example, if the plugin instance auth config requires a secret manager secret, the service account should be
    granted the secretmanager.versions.access permission on the corresponding secret, if the plugin instance auth config
    contains a service account, the service account should be granted the iam.serviceAccounts.getAccessToken permission
    on the corresponding service account."""


class GoogleCloudApihubV1AuthConfigTemplateDict(TypedDict):
    supported_auth_types: NotRequired[list[SupportedAuthTypeOrStr]]
    service_account: NotRequired[GoogleCloudApihubV1GoogleServiceAccountConfig3Dict]
