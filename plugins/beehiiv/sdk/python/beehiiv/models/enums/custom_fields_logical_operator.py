from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomFieldsLogicalOperator(str, Enum):
    AND = "and"
    OR = "or"

    __str__ = str.__str__


CustomFieldsLogicalOperatorOrStr: TypeAlias = Annotated[
    CustomFieldsLogicalOperator | str, open_enum_validator(CustomFieldsLogicalOperator)
]
