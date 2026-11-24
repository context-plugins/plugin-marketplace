from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EventTypeHolder(SdkBaseModel):
    """Event types detected in the article."""

    name: OptionalNullable[str] = UNSET
    """Detected event name."""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    """Detected event classification."""


class EventTypeHolderDict(TypedDict):
    name: NotRequired[str | None]
    type_: NotRequired[str | None]
