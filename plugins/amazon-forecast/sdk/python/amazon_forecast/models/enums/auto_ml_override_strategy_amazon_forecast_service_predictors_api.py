from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutoMlOverrideStrategyAmazonForecastServicePredictorsApi(str, Enum):
    """The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services
    Support or your account manager to learn more about access privileges. Used to overide the default AutoML strategy,
    which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use
    LatencyOptimized. This parameter is only valid for predictors trained using AutoML."""

    LATENCY_OPTIMIZED = "LatencyOptimized"
    ACCURACY_OPTIMIZED = "AccuracyOptimized"

    __str__ = str.__str__


AutoMlOverrideStrategyAmazonForecastServicePredictorsApiOrStr: TypeAlias = Annotated[
    AutoMlOverrideStrategyAmazonForecastServicePredictorsApi | str,
    open_enum_validator(AutoMlOverrideStrategyAmazonForecastServicePredictorsApi),
]
