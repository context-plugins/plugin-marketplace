from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MultiTeamFundraising(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["multi_team_fundraising"] = "multi_team_fundraising"
    value: OptionalNullable[bool] = UNSET


class MultiTeamFundraisingDict(TypedDict):
    name: Literal["multi_team_fundraising"]
    value: NotRequired[bool | None]
