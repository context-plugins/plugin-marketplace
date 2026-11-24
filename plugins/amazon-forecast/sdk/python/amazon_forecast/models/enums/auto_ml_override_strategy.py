from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutoMlOverrideStrategy(str, Enum):
    """The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon Web Services
    Support or your account manager to learn more about access privileges. The AutoML strategy used to train the
    predictor. Unless LatencyOptimized is specified, the AutoML strategy optimizes predictor accuracy. This parameter is
    only valid for predictors trained using AutoML."""

    LATENCY_OPTIMIZED = "LatencyOptimized"
    ACCURACY_OPTIMIZED = "AccuracyOptimized"

    __str__ = str.__str__


AutoMlOverrideStrategyOrStr: TypeAlias = Annotated[
    AutoMlOverrideStrategy | str, open_enum_validator(AutoMlOverrideStrategy)
]
