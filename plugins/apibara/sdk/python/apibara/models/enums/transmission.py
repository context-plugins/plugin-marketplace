from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transmission(str, Enum):
    MANUAL = "Manual"
    UNKNOWN = "Unknown"
    AUTOMATIC = "Automatic"

    __str__ = str.__str__


TransmissionOrStr: TypeAlias = Annotated[Transmission | str, open_enum_validator(Transmission)]
