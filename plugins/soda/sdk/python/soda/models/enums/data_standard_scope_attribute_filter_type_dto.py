from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataStandardScopeAttributeFilterTypeDto(str, Enum):
    EQUALS = "equals"
    CONTAINS = "contains"
    AND = "and"
    OR = "or"

    __str__ = str.__str__


DataStandardScopeAttributeFilterTypeDtoOrStr: TypeAlias = Annotated[
    DataStandardScopeAttributeFilterTypeDto | str, open_enum_validator(DataStandardScopeAttributeFilterTypeDto)
]
