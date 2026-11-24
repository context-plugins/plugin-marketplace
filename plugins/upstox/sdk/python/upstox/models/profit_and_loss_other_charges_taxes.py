from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfitAndLossOtherChargesTaxes(SdkBaseModel):
    transaction: Optional[float] = UNSET
    """transaction charges"""

    clearing: Optional[float] = UNSET
    """clearing charges"""

    ipft: Optional[float] = UNSET
    """IPF charges"""

    others: Optional[float] = UNSET
    """others charges"""

    sebi_turnover: Optional[float] = UNSET
    """SEBI turnover"""

    demat_transaction: Optional[float] = UNSET
    """demat transaction charges"""


class ProfitAndLossOtherChargesTaxesDict(TypedDict):
    transaction: NotRequired[float]
    clearing: NotRequired[float]
    ipft: NotRequired[float]
    others: NotRequired[float]
    sebi_turnover: NotRequired[float]
    demat_transaction: NotRequired[float]
