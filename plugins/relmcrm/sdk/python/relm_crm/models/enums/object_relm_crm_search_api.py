from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmSearchApi(str, Enum):
    SEARCH = "search"

    __str__ = str.__str__


ObjectRelmCrmSearchApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmSearchApi | str, open_enum_validator(ObjectRelmCrmSearchApi)
]
