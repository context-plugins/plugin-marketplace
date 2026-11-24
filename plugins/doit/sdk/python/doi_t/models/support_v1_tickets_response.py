from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportV1TicketsResponse(SdkBaseModel):
    id: Optional[int] = UNSET
    status: Optional[str] = UNSET
    assignee: Optional[str] = UNSET


class SupportV1TicketsResponseDict(TypedDict):
    id: NotRequired[int]
    status: NotRequired[str]
    assignee: NotRequired[str]
