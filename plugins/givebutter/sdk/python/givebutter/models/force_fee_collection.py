from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ForceFeeCollection(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["force_fee_collection"] = "force_fee_collection"
    value: OptionalNullable[bool] = UNSET


class ForceFeeCollectionDict(TypedDict):
    name: Literal["force_fee_collection"]
    value: NotRequired[bool | None]
