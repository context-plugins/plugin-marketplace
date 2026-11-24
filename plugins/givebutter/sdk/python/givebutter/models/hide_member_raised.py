from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideMemberRaised(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_member_raised"] = "hide_member_raised"
    value: OptionalNullable[bool] = UNSET


class HideMemberRaisedDict(TypedDict):
    name: Literal["hide_member_raised"]
    value: NotRequired[bool | None]
