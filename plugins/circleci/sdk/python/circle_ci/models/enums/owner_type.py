from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OwnerType(str, Enum):
    ACCOUNT = "account"
    ORGANIZATION = "organization"

    __str__ = str.__str__


OwnerTypeOrStr: TypeAlias = Annotated[OwnerType | str, open_enum_validator(OwnerType)]
