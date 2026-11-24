from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompassPushEventAuthorInputDto(SdkBaseModel):
    """The author who made the push"""

    name: OptionalNullable[str] = UNSET
    """The name of the author."""

    email: OptionalNullable[str] = UNSET
    """The email of the author."""


class CompassPushEventAuthorInputDtoDict(TypedDict):
    name: NotRequired[str | None]
    email: NotRequired[str | None]
