from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpendLimitAction(str, Enum):
    ALERT = "alert"
    BLOCK = "block"

    __str__ = str.__str__


SpendLimitActionOrStr: TypeAlias = Annotated[SpendLimitAction | str, open_enum_validator(SpendLimitAction)]
