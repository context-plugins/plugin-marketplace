from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .end_customer_node import EndCustomerNode, EndCustomerNodeDict
from .enums.handshake_state import HandshakeStateOrStr
from .enums.status_doi_t_billing_transfer_api import StatusDoiTBillingTransferApiOrStr
from .handshake_status import HandshakeStatus, HandshakeStatusDict


class ResellerAccountWithTenants(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    """12-digit AWS account ID of the reseller's program management account."""

    dpma_id: str = Field(alias="dpmaId")
    handshake_id: str = Field(alias="handshakeId")
    handshake_state: HandshakeStateOrStr = Field(alias="handshakeState")
    """AWS Organizations Handshake ``State`` value, lowercased."""

    status: StatusDoiTBillingTransferApiOrStr
    region: str
    """Inherited from the parent DPMA root; the reseller node itself carries no region metadata."""

    iam_status: str = Field(alias="iamStatus")
    """Inherited from the parent DPMA root; the reseller node itself carries no IAM metadata."""

    last_refresh_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastRefreshTime")
    """Inherited from the parent DPMA root. ``null`` if never refreshed."""

    effective_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="effectiveTime")
    """When the handshake reached a terminal state. ``null`` until then."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    handshake_status: HandshakeStatus = Field(alias="handshakeStatus")
    """Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA."""

    tenants: list[EndCustomerNode]


class ResellerAccountWithTenantsDict(TypedDict):
    reseller_pma_account_id: str
    dpma_id: str
    handshake_id: str
    handshake_state: HandshakeStateOrStr
    status: StatusDoiTBillingTransferApiOrStr
    region: str
    iam_status: str
    last_refresh_time: NotRequired[RFC3339DateTime | None]
    effective_time: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime
    handshake_status: HandshakeStatusDict
    tenants: list[EndCustomerNodeDict]
