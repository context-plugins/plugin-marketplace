from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditsCharged(int, Enum):
    VALUE_0 = 0

    __str__ = str.__str__


CreditsChargedOrInt: TypeAlias = Annotated[CreditsCharged | int, open_enum_validator(CreditsCharged)]
