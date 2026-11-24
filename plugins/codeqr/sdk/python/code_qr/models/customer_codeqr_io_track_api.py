from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomerCodeqrIoTrackApi(SdkBaseModel):
    id: str
    name: OptionalNullable[str] = UNSET
    email: OptionalNullable[str] = UNSET
    avatar: OptionalNullable[str] = UNSET


class CustomerCodeqrIoTrackApiDict(TypedDict):
    id: str
    name: NotRequired[str | None]
    email: NotRequired[str | None]
    avatar: NotRequired[str | None]
