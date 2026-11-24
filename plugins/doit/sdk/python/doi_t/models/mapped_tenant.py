from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.handshake_state import HandshakeStateOrStr


class MappedTenant(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    customer_id: str = Field(alias="customerId")
    tenant_type: str = Field(alias="tenantType")
    parent_tenant: str = Field(alias="parentTenant")
    display_name: str = Field(alias="displayName")
    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    handshake_state: HandshakeStateOrStr = Field(alias="handshakeState")
    """AWS Organizations Handshake ``State`` value, lowercased."""

    status: str
    effective_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="effectiveTime")
    """When the handshake reached a terminal state. ``null`` until then."""


class MappedTenantDict(TypedDict):
    customer_id: str
    tenant_type: str
    parent_tenant: str
    display_name: str
    reseller_pma_account_id: str
    handshake_state: HandshakeStateOrStr
    status: str
    effective_time: NotRequired[RFC3339DateTime | None]
