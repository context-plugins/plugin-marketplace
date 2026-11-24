from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AuthorType2(str, Enum):
    """The author type."""

    USER = "user"
    GUEST_AUTHOR = "guest_author"

    __str__ = str.__str__


AuthorType2OrStr: TypeAlias = Annotated[AuthorType2 | str, open_enum_validator(AuthorType2)]
