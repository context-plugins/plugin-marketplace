from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideFeeCollection(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_fee_collection"] = "hide_fee_collection"
    value: OptionalNullable[bool] = UNSET


class HideFeeCollectionDict(TypedDict):
    name: Literal["hide_fee_collection"]
    value: NotRequired[bool | None]
