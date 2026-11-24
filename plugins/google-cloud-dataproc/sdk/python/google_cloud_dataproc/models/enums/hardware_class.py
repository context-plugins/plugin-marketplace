from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HardwareClass(str, Enum):
    """Optional. The hardware class of the instances. This is a create-time specification and is not currently mutable
    via update masks."""

    HARDWARE_CLASS_UNSPECIFIED = "HARDWARE_CLASS_UNSPECIFIED"
    STANDARD = "STANDARD"
    PERFORMANCE = "PERFORMANCE"

    __str__ = str.__str__


HardwareClassOrStr: TypeAlias = Annotated[HardwareClass | str, open_enum_validator(HardwareClass)]
