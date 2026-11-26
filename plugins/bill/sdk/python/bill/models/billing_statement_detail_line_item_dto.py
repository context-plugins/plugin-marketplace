from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BillingStatementDetailLineItemDto(SdkBaseModel):
    """BillingStatementDetailLineItem response Dto."""

    quantity: Optional[int] = UNSET
    """Billing invoice line item quantity"""

    description: Optional[str] = UNSET
    """Billing invoice line item description"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Billing invoice line item type"""

    amount: Optional[float] = UNSET
    """Billing invoice line item amount"""


class BillingStatementDetailLineItemDtoDict(TypedDict):
    quantity: NotRequired[int]
    description: NotRequired[str]
    type_: NotRequired[str]
    amount: NotRequired[float]
