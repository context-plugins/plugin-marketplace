from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmCompaniesApi(str, Enum):
    LIST = "list"

    __str__ = str.__str__


ObjectRelmCrmCompaniesApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmCompaniesApi | str, open_enum_validator(ObjectRelmCrmCompaniesApi)
]
