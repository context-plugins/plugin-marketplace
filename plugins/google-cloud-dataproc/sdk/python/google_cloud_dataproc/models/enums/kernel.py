from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kernel(str, Enum):
    """Optional. Kernel"""

    KERNEL_UNSPECIFIED = "KERNEL_UNSPECIFIED"
    PYTHON = "PYTHON"
    SCALA = "SCALA"

    __str__ = str.__str__


KernelOrStr: TypeAlias = Annotated[Kernel | str, open_enum_validator(Kernel)]
