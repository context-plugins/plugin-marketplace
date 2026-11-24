from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PersonSummary(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    id: int
    name: str
    slug: str


class PersonSummaryDict(TypedDict):
    description: NotRequired[str | None]
    id: int
    name: str
    slug: str
