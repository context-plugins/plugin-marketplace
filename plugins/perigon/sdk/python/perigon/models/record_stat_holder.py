from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RecordStatHolder(SdkBaseModel):
    """Google Content Categories associated with the story and their article counts."""

    name: OptionalNullable[str] = UNSET
    """Name of the aggregated value."""

    count: OptionalNullable[int] = UNSET
    """Number of matching articles for the value."""


class RecordStatHolderDict(TypedDict):
    name: NotRequired[str | None]
    count: NotRequired[int | None]
