from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1PlatformPayeesApi(str, Enum):
    """The type of PayID identifier."""

    EMAIL = "EMAIL"
    PHONE = "PHONE"
    ABN = "ABN"
    ORG_ID = "ORG_ID"

    __str__ = str.__str__


Type1PlatformPayeesApiOrStr: TypeAlias = Annotated[
    Type1PlatformPayeesApi | str, open_enum_validator(Type1PlatformPayeesApi)
]
