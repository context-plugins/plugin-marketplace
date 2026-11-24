from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatahubV1EventsDeleteResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class DatahubV1EventsDeleteResponseDict(TypedDict):
    message: NotRequired[str]
