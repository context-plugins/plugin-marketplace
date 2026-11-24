from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator(str, Enum):
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


ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperatorOrStr: TypeAlias = Annotated[
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator | str,
    open_enum_validator(ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsOperator),
]
