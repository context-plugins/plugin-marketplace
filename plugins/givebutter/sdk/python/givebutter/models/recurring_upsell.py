from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RecurringUpsell(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["recurring_upsell"] = "recurring_upsell"
    value: OptionalNullable[bool] = UNSET


class RecurringUpsellDict(TypedDict):
    name: Literal["recurring_upsell"]
    value: NotRequired[bool | None]
