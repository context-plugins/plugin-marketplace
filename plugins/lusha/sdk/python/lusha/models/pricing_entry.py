from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PricingEntry(SdkBaseModel):
    credits: Optional[float] = UNSET
    per_quantity: Optional[float] = Field(default=UNSET, alias="perQuantity")


class PricingEntryDict(TypedDict):
    credits: NotRequired[float]
    per_quantity: NotRequired[float]
