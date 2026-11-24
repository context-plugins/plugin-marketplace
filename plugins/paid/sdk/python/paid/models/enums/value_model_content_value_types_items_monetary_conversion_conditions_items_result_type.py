from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType(str, Enum):
    CONSTANT = "constant"
    EXPRESSION = "expression"

    __str__ = str.__str__


ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeOrStr: TypeAlias = Annotated[
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType | str,
    open_enum_validator(ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultType),
]
