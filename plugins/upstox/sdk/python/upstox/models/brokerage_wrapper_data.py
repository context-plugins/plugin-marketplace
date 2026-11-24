from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .brokerage_data2 import BrokerageData2, BrokerageData2Dict


class BrokerageWrapperData(SdkBaseModel):
    charges: Optional[BrokerageData2] = UNSET
    """Response data for charges details"""


class BrokerageWrapperDataDict(TypedDict):
    charges: NotRequired[BrokerageData2Dict]
