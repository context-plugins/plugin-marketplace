from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout_plan import CheckoutPlan, CheckoutPlanDict


class CheckoutProduct(SdkBaseModel):
    id: str
    plans: Optional[list[CheckoutPlan]] = UNSET
    """Plans selected within this product. Absent when the product is offered with all of its plans and none are
    individually configured."""


class CheckoutProductDict(TypedDict):
    id: str
    plans: NotRequired[list[CheckoutPlanDict]]
