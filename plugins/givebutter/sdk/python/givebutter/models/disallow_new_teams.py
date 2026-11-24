from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisallowNewTeams(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disallow_new_teams"] = "disallow_new_teams"
    value: OptionalNullable[bool] = UNSET


class DisallowNewTeamsDict(TypedDict):
    name: Literal["disallow_new_teams"]
    value: NotRequired[bool | None]
