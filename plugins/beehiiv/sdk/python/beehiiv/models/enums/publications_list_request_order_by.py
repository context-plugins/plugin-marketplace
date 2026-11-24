from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationsListRequestOrderBy(str, Enum):
    CREATED = "created"
    NAME = "name"

    __str__ = str.__str__


PublicationsListRequestOrderByOrStr: TypeAlias = Annotated[
    PublicationsListRequestOrderBy | str, open_enum_validator(PublicationsListRequestOrderBy)
]
