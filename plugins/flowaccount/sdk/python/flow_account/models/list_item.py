from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ListItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: OptionalNullable[str] = UNSET
    value: OptionalNullable[str] = UNSET


class ListItemDict(TypedDict):
    text: NotRequired[str | None]
    value: NotRequired[str | None]
