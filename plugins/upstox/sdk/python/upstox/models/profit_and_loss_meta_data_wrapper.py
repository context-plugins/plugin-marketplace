from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .profit_and_loss_meta_data2 import ProfitAndLossMetaData2, ProfitAndLossMetaData2Dict


class ProfitAndLossMetaDataWrapper(SdkBaseModel):
    page: Optional[ProfitAndLossMetaData2] = UNSET
    """Meta data for trade wise data details"""


class ProfitAndLossMetaDataWrapperDict(TypedDict):
    page: NotRequired[ProfitAndLossMetaData2Dict]
