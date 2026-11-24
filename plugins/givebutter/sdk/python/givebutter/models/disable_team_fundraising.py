from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableTeamFundraising(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_team_fundraising"] = "disable_team_fundraising"
    value: OptionalNullable[bool] = UNSET


class DisableTeamFundraisingDict(TypedDict):
    name: Literal["disable_team_fundraising"]
    value: NotRequired[bool | None]
