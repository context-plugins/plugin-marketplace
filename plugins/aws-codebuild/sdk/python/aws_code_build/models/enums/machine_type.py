from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MachineType(str, Enum):
    """The machine type of the instance type included in your fleet."""

    GENERAL = "GENERAL"
    NVME = "NVME"

    __str__ = str.__str__


MachineTypeOrStr: TypeAlias = Annotated[MachineType | str, open_enum_validator(MachineType)]
