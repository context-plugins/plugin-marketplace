from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RequireAddress(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["require_address"] = "require_address"
    value: OptionalNullable[bool] = UNSET


class RequireAddressDict(TypedDict):
    name: Literal["require_address"]
    value: NotRequired[bool | None]
