from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profit_and_loss_charges_taxes1 import ProfitAndLossChargesTaxes1, ProfitAndLossChargesTaxes1Dict
from .profit_and_loss_other_charges_taxes2 import ProfitAndLossOtherChargesTaxes2, ProfitAndLossOtherChargesTaxes2Dict


class ProfitAndLossChargesData1(SdkBaseModel):
    """Response data for charges details"""

    total: Optional[float] = UNSET
    """Total charges for the user"""

    brokerage: Optional[float] = UNSET
    """Brokerage charges for the order"""

    taxes: Optional[ProfitAndLossChargesTaxes1] = UNSET
    """Taxes levied on order"""

    charges: Optional[ProfitAndLossOtherChargesTaxes2] = UNSET
    """Other charges levied"""


class ProfitAndLossChargesData1Dict(TypedDict):
    total: NotRequired[float]
    brokerage: NotRequired[float]
    taxes: NotRequired[ProfitAndLossChargesTaxes1Dict]
    charges: NotRequired[ProfitAndLossOtherChargesTaxes2Dict]
