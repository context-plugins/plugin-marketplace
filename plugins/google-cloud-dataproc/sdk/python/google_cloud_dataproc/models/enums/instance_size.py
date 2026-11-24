from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstanceSize(str, Enum):
    """An enum of readable instance sizes, with each instance size mapping to a float value (e.g.
    InstanceSize.EXTRA_SMALL = scaling_factor(0.1))"""

    INSTANCE_SIZE_UNSPECIFIED = "INSTANCE_SIZE_UNSPECIFIED"
    EXTRA_SMALL = "EXTRA_SMALL"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"
    EXTRA_LARGE = "EXTRA_LARGE"

    __str__ = str.__str__


InstanceSizeOrStr: TypeAlias = Annotated[InstanceSize | str, open_enum_validator(InstanceSize)]
