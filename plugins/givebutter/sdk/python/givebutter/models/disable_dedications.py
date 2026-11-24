from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableDedications(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_dedications"] = "disable_dedications"
    value: OptionalNullable[bool] = UNSET


class DisableDedicationsDict(TypedDict):
    name: Literal["disable_dedications"]
    value: NotRequired[bool | None]
