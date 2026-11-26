from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentClassificationsDto(SdkBaseModel):
    """Payment classifications dto."""

    chart_of_account_id: Optional[str] = Field(default=UNSET, alias="chartOfAccountId")
    """BILL-generated ID of the chart of accounts. The value begins with ``0ca``."""


class PaymentClassificationsDtoDict(TypedDict):
    chart_of_account_id: NotRequired[str]
