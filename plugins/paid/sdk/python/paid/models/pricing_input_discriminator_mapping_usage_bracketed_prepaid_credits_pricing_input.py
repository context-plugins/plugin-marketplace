from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput(SdkBaseModel):
    kind: Literal["signalQuantity"] = "signalQuantity"


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputDict(TypedDict):
    kind: Literal["signalQuantity"]
