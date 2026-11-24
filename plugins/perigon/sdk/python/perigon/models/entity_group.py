from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EntityGroup(SdkBaseModel):
    """Entity groups the monitor identifies in matching content."""

    group_reference: str = Field(alias="groupReference")
    """Reference name used to identify the entity group in monitor output."""

    description: OptionalNullable[str] = UNSET
    """Optional plain-language description of the entities represented by the group."""


class EntityGroupDict(TypedDict):
    group_reference: str
    description: NotRequired[str | None]
