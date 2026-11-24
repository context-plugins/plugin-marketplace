from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisablePublicJoin(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_public_join"] = "disable_public_join"
    value: OptionalNullable[bool] = UNSET


class DisablePublicJoinDict(TypedDict):
    name: Literal["disable_public_join"]
    value: NotRequired[bool | None]
