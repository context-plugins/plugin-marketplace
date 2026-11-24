from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifications_bill_v3_credit_memos_api import (
    ClassificationsBillV3CreditMemosApi,
    ClassificationsBillV3CreditMemosApiDict,
)


class CreateCreditMemoLineItemDto(SdkBaseModel):
    """Credit Memo Create Request Line Item."""

    description: Optional[str] = UNSET
    """Credit memo line item description"""

    price: Optional[float] = UNSET
    """Credit memo line item unit price. For a credit memo in an international currency (not USD), this value is in the
    local currency."""

    quantity: Optional[float] = UNSET
    """Credit memo line item unit quantity"""

    rate_percent: Optional[float] = Field(default=UNSET, alias="ratePercent")
    """Credit memo line item rate percent. Use ``ratePercent`` to apply a discount or markup in your credit memo.

    BILL applies the ``ratePercent`` to the sum of the ``amount`` values of all the line items above the ``ratePercent``
    line item.

    **Note**: Use a separate line item to set a ``ratePercent`` for the credit memo. Set the ``ratePercent`` line item
    as the final line item. Do not set ``price`` and ``quantity`` in the line item when you set ``ratePercent``.

    For example, let's say you have two line items in a credit memo with an ``amount`` sum of ``$150``. If you create a
    third line item with ``ratePercent`` set as ``-10``, a 10% discount (``$15``) is applied to the ``amount`` sum of
    ``$150``."""

    taxable: Optional[bool] = UNSET
    """Set as ``true`` if the credit memo line item is taxable"""

    classifications: Optional[ClassificationsBillV3CreditMemosApi] = UNSET


class CreateCreditMemoLineItemDtoDict(TypedDict):
    description: NotRequired[str]
    price: NotRequired[float]
    quantity: NotRequired[float]
    rate_percent: NotRequired[float]
    taxable: NotRequired[bool]
    classifications: NotRequired[ClassificationsBillV3CreditMemosApiDict]
