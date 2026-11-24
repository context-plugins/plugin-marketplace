from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentFormulasItemsConditionsItemsResultType(str, Enum):
    CONSTANT = "constant"
    EXPRESSION = "expression"

    __str__ = str.__str__


ValueModelContentFormulasItemsConditionsItemsResultTypeOrStr: TypeAlias = Annotated[
    ValueModelContentFormulasItemsConditionsItemsResultType | str,
    open_enum_validator(ValueModelContentFormulasItemsConditionsItemsResultType),
]
