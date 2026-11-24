from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypePlatformPayeesApi(str, Enum):
    """The type of identifier."""

    EMAIL = "EMAIL"
    PHONE = "PHONE"
    CONTACT_NAME = "CONTACT_NAME"

    __str__ = str.__str__


TypePlatformPayeesApiOrStr: TypeAlias = Annotated[
    TypePlatformPayeesApi | str, open_enum_validator(TypePlatformPayeesApi)
]
