from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3DevCycleManagementVariablesApi(str, Enum):
    STRING = "String"
    BOOLEAN = "Boolean"
    NUMBER = "Number"
    JSON = "JSON"

    __str__ = str.__str__


Type3DevCycleManagementVariablesApiOrStr: TypeAlias = Annotated[
    Type3DevCycleManagementVariablesApi | str, open_enum_validator(Type3DevCycleManagementVariablesApi)
]
