from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .margin_data2 import MarginData2, MarginData2Dict


class PostMarginResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[MarginData2] = UNSET
    """Response data for margin"""


class PostMarginResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[MarginData2Dict]
