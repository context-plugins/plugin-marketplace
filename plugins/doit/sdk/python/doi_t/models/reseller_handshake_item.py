from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResellerHandshakeItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    reseller_customer_id: str = Field(alias="resellerCustomerId")
    """DoiT customer ID of the reseller's end customer to issue a handshake for."""

    reseller_pma_account_id: str = Field(alias="resellerPmaAccountId")
    """12-digit AWS account ID of the reseller's program management account (PMA)."""


class ResellerHandshakeItemDict(TypedDict):
    reseller_customer_id: str
    reseller_pma_account_id: str
