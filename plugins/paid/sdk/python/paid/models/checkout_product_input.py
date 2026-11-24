from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout_plan_input import CheckoutPlanInput, CheckoutPlanInputDict


class CheckoutProductInput(SdkBaseModel):
    id: str
    plans: Optional[list[CheckoutPlanInput]] = UNSET
    """Select specific plans within this product. Omit to offer all of the product's plans."""


class CheckoutProductInputDict(TypedDict):
    id: str
    plans: NotRequired[list[CheckoutPlanInputDict]]
