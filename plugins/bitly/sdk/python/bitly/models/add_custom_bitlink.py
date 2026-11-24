from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddCustomBitlink(SdkBaseModel):
    custom_bitlink: Optional[str] = UNSET
    bitlink_id: Optional[str] = UNSET


class AddCustomBitlinkDict(TypedDict):
    custom_bitlink: NotRequired[str]
    bitlink_id: NotRequired[str]
