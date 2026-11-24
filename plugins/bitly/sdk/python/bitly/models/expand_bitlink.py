from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExpandBitlink(SdkBaseModel):
    bitlink_id: Optional[str] = UNSET


class ExpandBitlinkDict(TypedDict):
    bitlink_id: NotRequired[str]
