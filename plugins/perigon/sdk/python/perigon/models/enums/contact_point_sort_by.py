from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContactPointSortBy(str, Enum):
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"

    __str__ = str.__str__


ContactPointSortByOrStr: TypeAlias = Annotated[ContactPointSortBy | str, open_enum_validator(ContactPointSortBy)]
