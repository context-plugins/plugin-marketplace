from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of the webhook"""

    ONBOARDING = "ONBOARDING"
    PAYMENT = "PAYMENT"
    ALL = "ALL"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
