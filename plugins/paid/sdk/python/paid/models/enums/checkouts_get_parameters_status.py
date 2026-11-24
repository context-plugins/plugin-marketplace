from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckoutsGetParametersStatus(str, Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    ARCHIVED = "archived"

    __str__ = str.__str__


CheckoutsGetParametersStatusOrStr: TypeAlias = Annotated[
    CheckoutsGetParametersStatus | str, open_enum_validator(CheckoutsGetParametersStatus)
]
