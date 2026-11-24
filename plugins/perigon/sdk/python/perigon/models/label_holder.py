from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LabelHolder(SdkBaseModel):
    """Editorial labels assigned to the article."""

    name: OptionalNullable[str] = UNSET
    """Editorial label assigned to the article."""


class LabelHolderDict(TypedDict):
    name: NotRequired[str | None]
