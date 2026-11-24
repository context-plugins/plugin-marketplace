from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideTeamRaised(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_team_raised"] = "hide_team_raised"
    value: OptionalNullable[bool] = UNSET


class HideTeamRaisedDict(TypedDict):
    name: Literal["hide_team_raised"]
    value: NotRequired[bool | None]
