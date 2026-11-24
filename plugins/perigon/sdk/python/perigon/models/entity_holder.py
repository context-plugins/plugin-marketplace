from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EntityHolder(SdkBaseModel):
    """Named entities extracted from the article."""

    data: OptionalNullable[str] = UNSET
    """Text value of the extracted entity."""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    """Entity type, such as PERSON, ORGANIZATION, or LOCATION."""

    mentions: OptionalNullable[int] = UNSET
    """Number of times the entity appears in the article."""


class EntityHolderDict(TypedDict):
    data: NotRequired[str | None]
    type_: NotRequired[str | None]
    mentions: NotRequired[int | None]
