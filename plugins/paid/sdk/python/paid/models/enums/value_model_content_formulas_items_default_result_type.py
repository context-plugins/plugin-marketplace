from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueModelContentFormulasItemsDefaultResultType(str, Enum):
    CONSTANT = "constant"
    EXPRESSION = "expression"

    __str__ = str.__str__


ValueModelContentFormulasItemsDefaultResultTypeOrStr: TypeAlias = Annotated[
    ValueModelContentFormulasItemsDefaultResultType | str,
    open_enum_validator(ValueModelContentFormulasItemsDefaultResultType),
]
