from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2EventsResponse(SdkBaseModel):
    event_ids: Optional[list[str]] = UNSET


class ApiV2EventsResponseDict(TypedDict):
    event_ids: NotRequired[list[str]]
