from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bitlink_body import BitlinkBody, BitlinkBodyDict
from .custom_bitlink_history import CustomBitlinkHistory, CustomBitlinkHistoryDict


class CustomBitlinkBitlyCustomBitlinksApi(SdkBaseModel):
    custom_bitlink: Optional[str] = UNSET
    bitlink: Optional[BitlinkBody] = UNSET
    bitlink_history: Optional[list[CustomBitlinkHistory]] = UNSET


class CustomBitlinkBitlyCustomBitlinksApiDict(TypedDict):
    custom_bitlink: NotRequired[str]
    bitlink: NotRequired[BitlinkBodyDict]
    bitlink_history: NotRequired[list[CustomBitlinkHistoryDict]]
