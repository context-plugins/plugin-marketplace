from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExternalBudgetAlert(SdkBaseModel):
    """Budget alert status details."""

    forecasted_date: Optional[int] = Field(default=UNSET, alias="forecastedDate")
    percentage: Optional[float] = UNSET
    triggered: Optional[bool] = UNSET


class ExternalBudgetAlertDict(TypedDict):
    forecasted_date: NotRequired[int]
    percentage: NotRequired[float]
    triggered: NotRequired[bool]
