from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class TaxHistoryEvent(SdkBaseModel):
    time: Optional[int] = UNSET
    """Epoch milliseconds for the tax year."""

    tax_paid: OptionalNullable[float] = Field(default=UNSET, alias="taxPaid")
    value: OptionalNullable[float] = UNSET
    """Assessed value."""

    value_increase_rate: OptionalNullable[float] = Field(default=UNSET, alias="valueIncreaseRate")


class TaxHistoryEventDict(TypedDict):
    time: NotRequired[int]
    tax_paid: NotRequired[float | None]
    value: NotRequired[float | None]
    value_increase_rate: NotRequired[float | None]
