from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MatchedEntityData(SdkBaseModel):
    """Entities matched in the content that produced the event."""

    name: str
    """Name of the entity matched in the source content."""

    type_: str = Field(alias="type")
    """Entity type assigned by the monitor."""

    domain: OptionalNullable[str] = UNSET
    """Domain associated with the matched entity, when available."""


class MatchedEntityDataDict(TypedDict):
    name: str
    type_: str
    domain: NotRequired[str | None]
