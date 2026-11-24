from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AttributeTypeDto(str, Enum):
    TEXT = "text"
    NUMBER = "number"
    CHECKBOX = "checkbox"
    DATETIME = "datetime"
    SINGLE_SELECT = "singleSelect"
    MULTI_SELECT = "multiSelect"

    __str__ = str.__str__


AttributeTypeDtoOrStr: TypeAlias = Annotated[AttributeTypeDto | str, open_enum_validator(AttributeTypeDto)]
