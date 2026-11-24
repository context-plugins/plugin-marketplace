from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .azure_credentials2 import AzureCredentials2, AzureCredentials2Dict
from .federated_identity_config2 import FederatedIdentityConfig2, FederatedIdentityConfig2Dict


class AzureBlobStorageData2(SdkBaseModel):
    """Optional. An Azure Blob Storage data source."""

    credentials_secret: Optional[str] = Field(default=UNSET, alias="credentialsSecret")
    """Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored in Secret Manager
    in JSON format: { "sas_token" : "SAS_TOKEN" } GoogleServiceAccount must be granted
    ``roles/secretmanager.secretAccessor`` for the resource. See [Configure access to a source: Microsoft Azure Blob
    Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more
    information. If ``credentials_secret`` is specified, do not specify azure_credentials. Format:
    ``projects/{project_number}/secrets/{secret_name}``"""

    federated_identity_config: Optional[FederatedIdentityConfig2] = Field(
        default=UNSET, alias="federatedIdentityConfig"
    )
    """Optional. Federated identity config of a user registered Azure application. If ``federated_identity_config`` is
    specified, do not specify azure_credentials or credentials_secret."""

    azure_credentials: Optional[AzureCredentials2] = Field(default=UNSET, alias="azureCredentials")
    """Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data
    retention policy for user credentials, see `User credentials
    </storage-transfer/docs/data-retention#user-credentials>`__."""

    private_network_service: Optional[str] = Field(default=UNSET, alias="privateNetworkService")
    """Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format:
    ``projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}``"""

    container: Optional[str] = UNSET
    """Required. The container to transfer from the Azure Storage account."""

    storage_account: Optional[str] = Field(default=UNSET, alias="storageAccount")
    """Required. The name of the Azure Storage account."""

    path: Optional[str] = UNSET
    """Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is
    treated as an object prefix. As such, it should generally not begin with a '/'."""


class AzureBlobStorageData2Dict(TypedDict):
    credentials_secret: NotRequired[str]
    federated_identity_config: NotRequired[FederatedIdentityConfig2Dict]
    azure_credentials: NotRequired[AzureCredentials2Dict]
    private_network_service: NotRequired[str]
    container: NotRequired[str]
    storage_account: NotRequired[str]
    path: NotRequired[str]
