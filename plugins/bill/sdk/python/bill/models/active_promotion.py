from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ActivePromotion(SdkBaseModel):
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    """Promotion start date"""

    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """Promotion end date"""

    credit_card_rate: Optional[float] = Field(default=UNSET, alias="creditCardRate")
    """Credit card rate"""

    debit_card_rate: Optional[float] = Field(default=UNSET, alias="debitCardRate")
    """Debit card rate"""


class ActivePromotionDict(TypedDict):
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    credit_card_rate: NotRequired[float]
    debit_card_rate: NotRequired[float]
