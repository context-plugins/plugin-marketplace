from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDevCycleManagementCustomPropertiesApi(str, Enum):
    """Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String"
    """

    STRING = "String"
    BOOLEAN = "Boolean"
    NUMBER = "Number"

    __str__ = str.__str__


TypeDevCycleManagementCustomPropertiesApiOrStr: TypeAlias = Annotated[
    TypeDevCycleManagementCustomPropertiesApi | str, open_enum_validator(TypeDevCycleManagementCustomPropertiesApi)
]
