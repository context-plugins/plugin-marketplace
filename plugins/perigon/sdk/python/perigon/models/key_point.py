from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class KeyPoint(SdkBaseModel):
    """Key facts and developments identified in the story."""

    point: OptionalNullable[str] = UNSET
    """A key fact or development identified in the content."""

    references: OptionalNullable[list[str]] = UNSET
    """Article IDs supporting the key point."""


class KeyPointDict(TypedDict):
    point: NotRequired[str | None]
    references: NotRequired[list[str] | None]
