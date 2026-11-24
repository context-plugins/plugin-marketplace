from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RequireDonorPhone(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["require_donor_phone"] = "require_donor_phone"
    value: OptionalNullable[bool] = UNSET


class RequireDonorPhoneDict(TypedDict):
    name: Literal["require_donor_phone"]
    value: NotRequired[bool | None]
