from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateCustomBitlink(SdkBaseModel):
    bitlink_id: Optional[str] = UNSET


class UpdateCustomBitlinkDict(TypedDict):
    bitlink_id: NotRequired[str]
