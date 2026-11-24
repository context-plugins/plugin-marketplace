from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Pinterest2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET


class Pinterest2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
