from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScalingType(str, Enum):
    """The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto Amazon Forecast
    hyperparameter tuning chooses the best scale for the hyperparameter. Linear Hyperparameter tuning searches the
    values in the hyperparameter range by using a linear scale. Logarithmic Hyperparameter tuning searches the values in
    the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have values
    greater than 0. ReverseLogarithmic hyperparameter tuning searches the values in the hyperparameter range by using a
    reverse logarithmic scale. Re"""

    AUTO = "Auto"
    LINEAR = "Linear"
    LOGARITHMIC = "Logarithmic"
    REVERSE_LOGARITHMIC = "ReverseLogarithmic"

    __str__ = str.__str__


ScalingTypeOrStr: TypeAlias = Annotated[ScalingType | str, open_enum_validator(ScalingType)]
