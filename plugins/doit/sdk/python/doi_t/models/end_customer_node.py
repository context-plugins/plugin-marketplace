from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.handshake_state import HandshakeStateOrStr
from .enums.status1 import Status1OrStr


class EndCustomerNode(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    ec_account_id: str = Field(alias="ecAccountId")
    """12-digit AWS account ID of the end-customer account."""

    ec_customer_id: str = Field(alias="ecCustomerId")
    """DoiT customer ID the end-customer account is mapped to."""

    status: Status1OrStr
    handshake_state: HandshakeStateOrStr = Field(alias="handshakeState")
    """AWS Organizations Handshake ``State`` value, lowercased."""

    bill_source_type: str = Field(alias="billSourceType")
    cur_base_path: Optional[str] = Field(default=UNSET, alias="curBasePath")
    """S3 key prefix where this end customer's CUR data lands. Omitted when no path was recorded at mapping time."""

    effective_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="effectiveTime")
    """When the handshake reached a terminal state. ``null`` until then."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    last_refresh_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastRefreshTime")
    """When this mapping's status was last refreshed. ``null`` if never refreshed."""


class EndCustomerNodeDict(TypedDict):
    ec_account_id: str
    ec_customer_id: str
    status: Status1OrStr
    handshake_state: HandshakeStateOrStr
    bill_source_type: str
    cur_base_path: NotRequired[str]
    effective_time: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime
    last_refresh_time: NotRequired[RFC3339DateTime | None]
