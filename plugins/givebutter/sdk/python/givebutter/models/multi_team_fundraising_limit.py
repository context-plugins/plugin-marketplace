from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MultiTeamFundraisingLimit(SdkBaseModel):
    """Accepts a ``integer`` value."""

    name: Literal["multi_team_fundraising_limit"] = "multi_team_fundraising_limit"
    value: OptionalNullable[int] = UNSET


class MultiTeamFundraisingLimitDict(TypedDict):
    name: Literal["multi_team_fundraising_limit"]
    value: NotRequired[int | None]
