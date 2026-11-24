from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CheckoutPlanInput(SdkBaseModel):
    id: str
    """Plan identifier, as returned by the list plans endpoint. Selects a specific plan within the product."""

    features: Optional[list[str]] = UNSET
    """Override the feature bullet points shown for this plan on the hosted checkout page."""


class CheckoutPlanInputDict(TypedDict):
    id: str
    features: NotRequired[list[str]]
