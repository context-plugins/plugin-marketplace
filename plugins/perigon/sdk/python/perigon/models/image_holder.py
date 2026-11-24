from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ImageHolder(SdkBaseModel):
    url: OptionalNullable[str] = UNSET


class ImageHolderDict(TypedDict):
    url: NotRequired[str | None]
