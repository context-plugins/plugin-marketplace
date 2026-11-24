from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WeightedQuantileLoss(SdkBaseModel):
    quantile: Optional[float] = Field(default=UNSET, alias="Quantile")
    """The quantile. Quantiles divide a probability distribution into regions of equal probability. For example, if the
    distribution was divided into 5 regions of equal probability, the quantiles would be 0.2, 0.4, 0.6, and 0.8."""

    loss_value: Optional[float] = Field(default=UNSET, alias="LossValue")
    """The difference between the predicted value and the actual value over the quantile, weighted (normalized) by
    dividing by the sum over all quantiles."""


class WeightedQuantileLossDict(TypedDict):
    quantile: NotRequired[float]
    loss_value: NotRequired[float]
