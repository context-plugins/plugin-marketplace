from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomatedAdvertisementKind2(str, Enum):
    """The automated advertisement kind to fill at publish time."""

    PRIMARY = "primary"
    SECONDARY = "secondary"

    __str__ = str.__str__


AutomatedAdvertisementKind2OrStr: TypeAlias = Annotated[
    AutomatedAdvertisementKind2 | str, open_enum_validator(AutomatedAdvertisementKind2)
]
