from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .key_ratio_data import KeyRatioData, KeyRatioDataDict


class KeyRatiosResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[KeyRatioData]] = UNSET


class KeyRatiosResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[KeyRatioDataDict]]
