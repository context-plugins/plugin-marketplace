from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OtherTaxes1(SdkBaseModel):
    """Other charges levied"""

    transaction: Optional[float] = UNSET
    """Transaction charges"""

    clearing: Optional[float] = UNSET
    """Clearing charges"""

    ipft: Optional[float] = UNSET
    """IPF charges"""

    sebi_turnover: Optional[float] = UNSET
    """SEBI turnover charges"""


class OtherTaxes1Dict(TypedDict):
    transaction: NotRequired[float]
    clearing: NotRequired[float]
    ipft: NotRequired[float]
    sebi_turnover: NotRequired[float]
