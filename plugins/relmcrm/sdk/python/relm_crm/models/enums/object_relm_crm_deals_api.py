from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmDealsApi(str, Enum):
    DEAL = "deal"

    __str__ = str.__str__


ObjectRelmCrmDealsApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmDealsApi | str, open_enum_validator(ObjectRelmCrmDealsApi)
]
