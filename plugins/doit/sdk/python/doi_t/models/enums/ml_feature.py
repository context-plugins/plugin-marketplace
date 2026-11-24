from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MlFeature(str, Enum):
    INCREASING = "increasing"
    DECREASING = "decreasing"
    NONE = "none"
    FORECAST = "forecast"

    __str__ = str.__str__


MlFeatureOrStr: TypeAlias = Annotated[MlFeature | str, open_enum_validator(MlFeature)]
