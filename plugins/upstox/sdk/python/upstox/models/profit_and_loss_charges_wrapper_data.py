from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profit_and_loss_charges_data1 import ProfitAndLossChargesData1, ProfitAndLossChargesData1Dict


class ProfitAndLossChargesWrapperData(SdkBaseModel):
    charges_breakdown: Optional[ProfitAndLossChargesData1] = UNSET
    """Response data for charges details"""


class ProfitAndLossChargesWrapperDataDict(TypedDict):
    charges_breakdown: NotRequired[ProfitAndLossChargesData1Dict]
