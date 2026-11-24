from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentFormulasItemsConditionsItemsOperator(str, Enum):
    GTE = "gte"
    GT = "gt"
    LT = "lt"
    LTE = "lte"
    EQ = "eq"
    NEQ = "neq"
    CONTAINS = "contains"
    EQ_STRING = "eq_string"
    EQ_BOOL = "eq_bool"

    __str__ = str.__str__


ValueModelContentFormulasItemsConditionsItemsOperatorOrStr: TypeAlias = Annotated[
    ValueModelContentFormulasItemsConditionsItemsOperator | str,
    open_enum_validator(ValueModelContentFormulasItemsConditionsItemsOperator),
]
