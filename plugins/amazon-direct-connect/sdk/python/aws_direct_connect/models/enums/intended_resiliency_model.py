from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntendedResiliencyModel(str, Enum):
    """The resiliency model that the resiliency group is intended to meet. The valid values are maximum-resiliency,
    high-resiliency, and basic-resiliency."""

    MAXIMUM_RESILIENCY = "maximum-resiliency"
    HIGH_RESILIENCY = "high-resiliency"
    BASIC_RESILIENCY = "basic-resiliency"

    __str__ = str.__str__


IntendedResiliencyModelOrStr: TypeAlias = Annotated[
    IntendedResiliencyModel | str, open_enum_validator(IntendedResiliencyModel)
]
