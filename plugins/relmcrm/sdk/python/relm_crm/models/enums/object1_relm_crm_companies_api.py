from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Object1RelmCrmCompaniesApi(str, Enum):
    COMPANY = "company"

    __str__ = str.__str__


Object1RelmCrmCompaniesApiOrStr: TypeAlias = Annotated[
    Object1RelmCrmCompaniesApi | str, open_enum_validator(Object1RelmCrmCompaniesApi)
]
