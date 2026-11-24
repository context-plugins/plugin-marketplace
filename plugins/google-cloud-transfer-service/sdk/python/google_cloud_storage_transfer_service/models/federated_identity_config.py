from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FederatedIdentityConfig(SdkBaseModel):
    """The identity of an Azure application through which Storage Transfer Service can authenticate requests using Azure
    workload identity federation. Storage Transfer Service can issue requests to Azure Storage through registered Azure
    applications, eliminating the need to pass credentials to Storage Transfer Service directly. To configure federated
    identity, see `Configure access to Microsoft Azure Storage
    <https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option_3_authenticate_using_federated_identity>`__."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. The client (application) ID of the application with federated credentials."""

    tenant_id: Optional[str] = Field(default=UNSET, alias="tenantId")
    """Required. The tenant (directory) ID of the application with federated credentials."""


class FederatedIdentityConfigDict(TypedDict):
    client_id: NotRequired[str]
    tenant_id: NotRequired[str]
