from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptimizationMetric(str, Enum):
    """The accuracy metric used to optimize the predictor."""

    WAPE = "WAPE"
    RMSE = "RMSE"
    AVERAGE_WEIGHTED_QUANTILE_LOSS = "AverageWeightedQuantileLoss"
    MASE = "MASE"
    MAPE = "MAPE"

    __str__ = str.__str__


OptimizationMetricOrStr: TypeAlias = Annotated[OptimizationMetric | str, open_enum_validator(OptimizationMetric)]
