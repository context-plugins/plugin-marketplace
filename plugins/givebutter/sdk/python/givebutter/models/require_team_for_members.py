from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RequireTeamForMembers(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["require_team_for_members"] = "require_team_for_members"
    value: OptionalNullable[bool] = UNSET


class RequireTeamForMembersDict(TypedDict):
    name: Literal["require_team_for_members"]
    value: NotRequired[bool | None]
