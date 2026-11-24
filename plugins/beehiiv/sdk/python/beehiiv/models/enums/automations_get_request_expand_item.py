from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationsGetRequestExpandItem(str, Enum):
    STATS = "stats"

    __str__ = str.__str__


AutomationsGetRequestExpandItemOrStr: TypeAlias = Annotated[
    AutomationsGetRequestExpandItem | str, open_enum_validator(AutomationsGetRequestExpandItem)
]
