from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthorType(str, Enum):
    USER = "user"
    GUEST_AUTHOR = "guest_author"

    __str__ = str.__str__


AuthorTypeOrStr: TypeAlias = Annotated[AuthorType | str, open_enum_validator(AuthorType)]
