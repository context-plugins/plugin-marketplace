from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WikiPageSectionHolder(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    style_level: OptionalNullable[int] = Field(default=UNSET, alias="styleLevel")
    loc: OptionalNullable[list[int]] = UNSET
    text_raw: OptionalNullable[str] = Field(default=UNSET, alias="textRaw")
    text_rich: OptionalNullable[str] = Field(default=UNSET, alias="textRich")


class WikiPageSectionHolderDict(TypedDict):
    id: NotRequired[str | None]
    title: NotRequired[str | None]
    style_level: NotRequired[int | None]
    loc: NotRequired[list[int] | None]
    text_raw: NotRequired[str | None]
    text_rich: NotRequired[str | None]
