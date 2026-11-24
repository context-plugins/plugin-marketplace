from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideMoneyRaised(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_money_raised"] = "hide_money_raised"
    value: OptionalNullable[bool] = UNSET


class HideMoneyRaisedDict(TypedDict):
    name: Literal["hide_money_raised"]
    value: NotRequired[bool | None]
