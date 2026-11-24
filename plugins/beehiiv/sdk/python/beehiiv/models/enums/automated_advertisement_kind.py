from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomatedAdvertisementKind(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"

    __str__ = str.__str__


AutomatedAdvertisementKindOrStr: TypeAlias = Annotated[
    AutomatedAdvertisementKind | str, open_enum_validator(AutomatedAdvertisementKind)
]
