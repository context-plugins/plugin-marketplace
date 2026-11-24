from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class IdNameHolder(SdkBaseModel):
    """Known journalist records matched to the article byline."""

    id: OptionalNullable[str] = UNSET
    """Unique identifier for the matched record."""

    name: OptionalNullable[str] = UNSET
    """Display name of the matched record."""


class IdNameHolderDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
