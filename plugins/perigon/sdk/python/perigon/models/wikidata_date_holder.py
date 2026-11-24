from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WikidataDateHolder(SdkBaseModel):
    time: OptionalNullable[str] = UNSET
    precision: OptionalNullable[str] = UNSET


class WikidataDateHolderDict(TypedDict):
    time: NotRequired[str | None]
    precision: NotRequired[str | None]
