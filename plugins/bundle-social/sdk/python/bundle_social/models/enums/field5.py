from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Field5(str, Enum):
    URI = "uri"
    PLACE_ACTION_TYPE = "placeActionType"
    IS_PREFERRED = "isPreferred"

    __str__ = str.__str__


Field5OrStr: TypeAlias = Annotated[Field5 | str, open_enum_validator(Field5)]
