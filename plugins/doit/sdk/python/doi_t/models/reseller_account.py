from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.handshake_state import HandshakeStateOrStr
from .enums.status_doi_t_billing_transfer_api import StatusDoiTBillingTransferApiOrStr


class ResellerAccount(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    """12-digit AWS account ID of the reseller's program management account."""

    dpma_id: str = Field(alias="dpmaId")
    handshake_id: str = Field(alias="handshakeId")
    handshake_state: HandshakeStateOrStr = Field(alias="handshakeState")
    """AWS Organizations Handshake ``State`` value, lowercased."""

    status: StatusDoiTBillingTransferApiOrStr
    effective_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="effectiveTime")
    """When the handshake reached a terminal state. ``null`` until then."""

    created_at: RFC3339DateTime = Field(alias="createdAt")


class ResellerAccountDict(TypedDict):
    reseller_pma_account_id: str
    dpma_id: str
    handshake_id: str
    handshake_state: HandshakeStateOrStr
    status: StatusDoiTBillingTransferApiOrStr
    effective_time: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime
