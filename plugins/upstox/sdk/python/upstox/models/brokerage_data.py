from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .brokerage_taxes1 import BrokerageTaxes1, BrokerageTaxes1Dict
from .dp_plan import DpPlan, DpPlanDict
from .dp_plan1 import DpPlan1, DpPlan1Dict
from .other_taxes import OtherTaxes, OtherTaxesDict
from .other_taxes1 import OtherTaxes1, OtherTaxes1Dict


class BrokerageData(SdkBaseModel):
    total: Optional[float] = UNSET
    """Total charges for the order"""

    brokerage: Optional[float] = UNSET
    """Brokerage charges for the order"""

    taxes: Optional[BrokerageTaxes1] = UNSET
    """Taxes levied on order"""

    other_taxes: Optional[OtherTaxes1] = Field(default=UNSET, alias="otherTaxes")
    """Other charges levied"""

    dp_plan: Optional[DpPlan1] = Field(default=UNSET, alias="dpPlan")
    """DP charges related information"""

    other_charges: Optional[OtherTaxes] = UNSET
    dp_plan2: Optional[DpPlan] = Field(default=UNSET, alias="dp_plan")


class BrokerageDataDict(TypedDict):
    total: NotRequired[float]
    brokerage: NotRequired[float]
    taxes: NotRequired[BrokerageTaxes1Dict]
    other_taxes: NotRequired[OtherTaxes1Dict]
    dp_plan: NotRequired[DpPlan1Dict]
    other_charges: NotRequired[OtherTaxesDict]
    dp_plan2: NotRequired[DpPlanDict]
