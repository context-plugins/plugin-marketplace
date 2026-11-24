from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectType(str, Enum):
    CONTACT = "contact"
    COMPANY = "company"

    __str__ = str.__str__


ObjectTypeOrStr: TypeAlias = Annotated[ObjectType | str, open_enum_validator(ObjectType)]
