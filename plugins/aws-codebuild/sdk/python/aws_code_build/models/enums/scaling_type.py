from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScalingType(str, Enum):
    """The scaling type for a compute fleet."""

    TARGET_TRACKING_SCALING = "TARGET_TRACKING_SCALING"

    __str__ = str.__str__


ScalingTypeOrStr: TypeAlias = Annotated[ScalingType | str, open_enum_validator(ScalingType)]
