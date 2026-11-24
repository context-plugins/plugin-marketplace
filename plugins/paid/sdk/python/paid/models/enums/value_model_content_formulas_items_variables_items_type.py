from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentFormulasItemsVariablesItemsType(str, Enum):
    NUMBER = "number"
    STRING = "string"
    BOOLEAN = "boolean"
    DURATION = "duration"

    __str__ = str.__str__


ValueModelContentFormulasItemsVariablesItemsTypeOrStr: TypeAlias = Annotated[
    ValueModelContentFormulasItemsVariablesItemsType | str,
    open_enum_validator(ValueModelContentFormulasItemsVariablesItemsType),
]
