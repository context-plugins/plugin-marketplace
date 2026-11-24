from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    CREATOR_UUID = "creator.uuid"
    CREATED_ON = "created_on"
    RUN_CREATION_DATE = "run_creation_date"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
