from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Clixexternalv1UserPropertyType(str, Enum):
    USER_PROPERTY_TYPE_STRING = "USER_PROPERTY_TYPE_STRING"
    USER_PROPERTY_TYPE_NUMBER = "USER_PROPERTY_TYPE_NUMBER"
    USER_PROPERTY_TYPE_BOOLEAN = "USER_PROPERTY_TYPE_BOOLEAN"

    __str__ = str.__str__


Clixexternalv1UserPropertyTypeOrStr: TypeAlias = Annotated[
    Clixexternalv1UserPropertyType | str, open_enum_validator(Clixexternalv1UserPropertyType)
]
