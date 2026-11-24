from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.handshake_state import HandshakeStateOrStr
from .enums.reseller_handshake_status import ResellerHandshakeStatusOrStr
from .reseller_handshake_error import ResellerHandshakeError, ResellerHandshakeErrorDict


class ResellerHandshakeResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    reseller_customer_id: str = Field(alias="resellerCustomerId")
    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    status: ResellerHandshakeStatusOrStr
    """Outcome of processing this batch item."""

    handshake_id: Optional[str] = Field(default=UNSET, alias="handshakeId")
    """AWS Organizations handshake ID. Absent when no handshake was issued (e.g. ``no_op``, ``failed``, or dry run)."""

    handshake_state: Optional[HandshakeStateOrStr] = Field(default=UNSET, alias="handshakeState")
    """AWS Organizations Handshake ``State`` value, lowercased."""

    error: Optional[ResellerHandshakeError] = UNSET


class ResellerHandshakeResultDict(TypedDict):
    reseller_customer_id: str
    reseller_pma_account_id: str
    status: ResellerHandshakeStatusOrStr
    handshake_id: NotRequired[str]
    handshake_state: NotRequired[HandshakeStateOrStr]
    error: NotRequired[ResellerHandshakeErrorDict]
