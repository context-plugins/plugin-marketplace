from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateOrderLineAttributeRequestPricingPricingInput(SdkBaseModel):
    kind: Literal["signalQuantity"] = "signalQuantity"


class CreateOrderLineAttributeRequestPricingPricingInputDict(TypedDict):
    kind: Literal["signalQuantity"]
