from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plan_ref import PlanRef, PlanRefDict


class CheckoutSelectedProduct(SdkBaseModel):
    """The product and plan the customer selected, once checkout completes. Null before completion."""

    id: str
    plan: PlanRef


class CheckoutSelectedProductDict(TypedDict):
    id: str
    plan: PlanRefDict
