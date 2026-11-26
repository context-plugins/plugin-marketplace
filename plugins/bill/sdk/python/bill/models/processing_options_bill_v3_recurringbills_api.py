from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessingOptionsBillV3RecurringbillsApi(SdkBaseModel):
    auto_payment: Optional[bool] = Field(default=UNSET, alias="autoPayment")
    """Set as ``true`` to enable auto-payment for each bill"""


class ProcessingOptionsBillV3RecurringbillsApiDict(TypedDict):
    auto_payment: NotRequired[bool]
