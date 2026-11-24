from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class EventResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET


class EventResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
