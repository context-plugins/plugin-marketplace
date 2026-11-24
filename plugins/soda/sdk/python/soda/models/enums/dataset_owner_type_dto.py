from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetOwnerTypeDto(str, Enum):
    USER = "user"
    USER_GROUP = "userGroup"

    __str__ = str.__str__


DatasetOwnerTypeDtoOrStr: TypeAlias = Annotated[DatasetOwnerTypeDto | str, open_enum_validator(DatasetOwnerTypeDto)]
