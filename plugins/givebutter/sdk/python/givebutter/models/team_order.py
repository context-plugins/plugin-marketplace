from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TeamOrder(SdkBaseModel):
    """Team list ordering. Typical values: ``name``, ``donors``, ``created_at``."""

    name: Literal["team_order"] = "team_order"
    value: OptionalNullable[str] = UNSET


class TeamOrderDict(TypedDict):
    name: Literal["team_order"]
    value: NotRequired[str | None]
