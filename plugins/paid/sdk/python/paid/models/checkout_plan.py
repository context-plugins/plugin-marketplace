from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CheckoutPlan(SdkBaseModel):
    id: str
    features: Optional[list[str]] = UNSET


class CheckoutPlanDict(TypedDict):
    id: str
    features: NotRequired[list[str]]
