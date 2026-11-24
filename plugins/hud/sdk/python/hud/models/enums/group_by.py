from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupBy(str, Enum):
    API_KEY = "api_key"
    BYOK = "byok"
    MODEL = "model"
    USER = "user"
    ROUTE = "route"

    __str__ = str.__str__


GroupByOrStr: TypeAlias = Annotated[GroupBy | str, open_enum_validator(GroupBy)]
