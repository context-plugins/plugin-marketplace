from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    INSURANCE = "insurance"
    NON_INSURANCE = "non_insurance"
    FINANCE = "finance"
    DEALER = "dealer"
    UNKNOWN = "unknown"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
