from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_callnode_io_wholesale_api import BillingCallnodeIoWholesaleApiOrStr
from .number import Number, NumberDict
from .wallet_callnode_io_wholesale_api import WalletCallnodeIoWholesaleApi, WalletCallnodeIoWholesaleApiDict


class ApiV1WholesaleNumbersResponse(SdkBaseModel):
    number: Optional[Number] = UNSET
    charged: Optional[float] = UNSET
    """First month"""

    monthly_rate: Optional[float] = Field(default=UNSET, alias="monthlyRate")
    wallet: Optional[WalletCallnodeIoWholesaleApi] = UNSET
    billing: Optional[BillingCallnodeIoWholesaleApiOrStr] = UNSET


class ApiV1WholesaleNumbersResponseDict(TypedDict):
    number: NotRequired[NumberDict]
    charged: NotRequired[float]
    monthly_rate: NotRequired[float]
    wallet: NotRequired[WalletCallnodeIoWholesaleApiDict]
    billing: NotRequired[BillingCallnodeIoWholesaleApiOrStr]
