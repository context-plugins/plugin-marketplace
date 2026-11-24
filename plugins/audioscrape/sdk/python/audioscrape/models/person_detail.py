from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .person_appearance import PersonAppearance, PersonAppearanceDict


class PersonDetail(SdkBaseModel):
    appearances: list[PersonAppearance]
    description: OptionalNullable[str] = UNSET
    id: int
    name: str
    slug: str


class PersonDetailDict(TypedDict):
    appearances: list[PersonAppearanceDict]
    description: NotRequired[str | None]
    id: int
    name: str
    slug: str
