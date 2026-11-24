from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MortgagecalculatorRequest(SdkBaseModel):
    amount: float
    """The loan amount"""

    rate: float
    """The interest rate (percentage)"""

    years: int
    """The loan term in years"""

    downpayment: Optional[float] = UNSET
    """The down payment amount"""

    annual_propertytax: Optional[float] = UNSET
    """The annual property tax amount"""

    annual_homeinsurance: Optional[float] = UNSET
    """The annual home insurance amount"""

    annual_hoa: Optional[float] = UNSET
    """The annual HOA amount"""


class V1MortgagecalculatorRequestDict(TypedDict):
    amount: float
    rate: float
    years: int
    downpayment: NotRequired[float]
    annual_propertytax: NotRequired[float]
    annual_homeinsurance: NotRequired[float]
    annual_hoa: NotRequired[float]
