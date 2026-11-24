from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisablePublicJoinButton(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_public_join_button"] = "disable_public_join_button"
    value: OptionalNullable[bool] = UNSET


class DisablePublicJoinButtonDict(TypedDict):
    name: Literal["disable_public_join_button"]
    value: NotRequired[bool | None]
