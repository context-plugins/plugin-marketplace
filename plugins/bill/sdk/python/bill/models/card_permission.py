from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CardPermission(SdkBaseModel):
    """Funding Account Card Permission response."""

    pay_by_card: Optional[bool] = Field(default=UNSET, alias="payByCard")
    """This field is set as ``true`` if you can pay by card"""

    funding_enabled: Optional[bool] = Field(default=UNSET, alias="fundingEnabled")
    """This field is set as ``true`` if you can add a card account as a payment method"""

    amex_allowed: Optional[bool] = Field(default=UNSET, alias="amexAllowed")
    """This field is set as ``true`` if you can pay with an AMEX credit card"""


class CardPermissionDict(TypedDict):
    pay_by_card: NotRequired[bool]
    funding_enabled: NotRequired[bool]
    amex_allowed: NotRequired[bool]
