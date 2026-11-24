from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomationsListRequestExpandItem(str, Enum):
    STATS = "stats"

    __str__ = str.__str__


AutomationsListRequestExpandItemOrStr: TypeAlias = Annotated[
    AutomationsListRequestExpandItem | str, open_enum_validator(AutomationsListRequestExpandItem)
]
