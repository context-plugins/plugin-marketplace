from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1GoogleServiceAccountConfig3(SdkBaseModel):
    """Optional. The service account of the plugin hosting service. This service account should be granted the required
    permissions on the Auth Config parameters provided while creating the plugin instances corresponding to this plugin.
    For example, if the plugin instance auth config requires a secret manager secret, the service account should be
    granted the secretmanager.versions.access permission on the corresponding secret, if the plugin instance auth config
    contains a service account, the service account should be granted the iam.serviceAccounts.getAccessToken permission
    on the corresponding service account."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Required. The service account to be used for authenticating request. The ``iam.serviceAccounts.getAccessToken``
    permission should be granted on this service account to the impersonator service account."""


class GoogleCloudApihubV1GoogleServiceAccountConfig3Dict(TypedDict):
    service_account: NotRequired[str]
