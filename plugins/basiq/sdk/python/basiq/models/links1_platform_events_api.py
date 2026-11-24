from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links1PlatformEventsApi(SdkBaseModel):
    accounts: Optional[str] = UNSET
    self: Optional[str] = UNSET
    transactions: Optional[str] = UNSET


class Links1PlatformEventsApiDict(TypedDict):
    accounts: NotRequired[str]
    self: NotRequired[str]
    transactions: NotRequired[str]
