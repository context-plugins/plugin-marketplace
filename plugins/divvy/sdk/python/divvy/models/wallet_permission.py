from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WalletPermission(SdkBaseModel):
    """Funding account wallet permission response."""

    funding_enabled: Optional[bool] = Field(default=UNSET, alias="fundingEnabled")
    """This field is set as ``true`` if you have access to Wallet (BILL balance) as a payment method"""


class WalletPermissionDict(TypedDict):
    funding_enabled: NotRequired[bool]
