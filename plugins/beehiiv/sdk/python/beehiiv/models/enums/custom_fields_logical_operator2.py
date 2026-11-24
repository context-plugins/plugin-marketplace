from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomFieldsLogicalOperator2(str, Enum):
    """The logical operator used to combine multiple custom field filters. Defaults to ``and`` if not specified."""

    AND = "and"
    OR = "or"

    __str__ = str.__str__


CustomFieldsLogicalOperator2OrStr: TypeAlias = Annotated[
    CustomFieldsLogicalOperator2 | str, open_enum_validator(CustomFieldsLogicalOperator2)
]
