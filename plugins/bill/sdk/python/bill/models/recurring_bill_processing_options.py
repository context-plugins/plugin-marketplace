from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecurringBillProcessingOptions(SdkBaseModel):
    """User provided options for processing the recurring payment."""

    auto_payment: Optional[bool] = Field(default=UNSET, alias="autoPayment")
    """Set as ``true`` to enable auto-payment for each bill"""


class RecurringBillProcessingOptionsDict(TypedDict):
    auto_payment: NotRequired[bool]
