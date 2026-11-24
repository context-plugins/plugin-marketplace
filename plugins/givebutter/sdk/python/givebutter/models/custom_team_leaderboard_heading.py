from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomTeamLeaderboardHeading(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["custom_team_leaderboard_heading"] = "custom_team_leaderboard_heading"
    value: OptionalNullable[str] = UNSET


class CustomTeamLeaderboardHeadingDict(TypedDict):
    name: Literal["custom_team_leaderboard_heading"]
    value: NotRequired[str | None]
