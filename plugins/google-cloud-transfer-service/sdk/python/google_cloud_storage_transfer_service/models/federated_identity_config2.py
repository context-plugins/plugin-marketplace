from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FederatedIdentityConfig2(SdkBaseModel):
    """Optional. Federated identity config of a user registered Azure application. If ``federated_identity_config`` is
    specified, do not specify azure_credentials or credentials_secret."""

    client_id: Optional[str] = Field(default=UNSET, alias="clientId")
    """Required. The client (application) ID of the application with federated credentials."""

    tenant_id: Optional[str] = Field(default=UNSET, alias="tenantId")
    """Required. The tenant (directory) ID of the application with federated credentials."""


class FederatedIdentityConfig2Dict(TypedDict):
    client_id: NotRequired[str]
    tenant_id: NotRequired[str]
