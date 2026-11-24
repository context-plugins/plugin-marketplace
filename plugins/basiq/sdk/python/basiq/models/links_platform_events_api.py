from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinksPlatformEventsApi(SdkBaseModel):
    self: Optional[str] = UNSET


class LinksPlatformEventsApiDict(TypedDict):
    self: NotRequired[str]
