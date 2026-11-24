from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput(SdkBaseModel):
    kind: Literal["signalQuantity"] = "signalQuantity"


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict(TypedDict):
    kind: Literal["signalQuantity"]
