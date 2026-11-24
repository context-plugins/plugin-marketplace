from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Twitter2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET


class Twitter2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
