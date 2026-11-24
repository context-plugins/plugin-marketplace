from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompassCreateFlagEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the flag event."""

    id: str
    """The ID of the flag."""

    status: OptionalNullable[str] = UNSET
    """The flag's status. The recognized values (case-insensitive) are on, off, created, archived, deleted, and
    targeting_updated. Any other value, although acceptable, will be displayed as unknown on the activity feed."""


class CompassCreateFlagEventPropertiesInputDtoDict(TypedDict):
    id: str
    status: NotRequired[str | None]
