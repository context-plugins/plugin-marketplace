from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EmailType(str, Enum):
    """The type of email address (alternative to 'type')"""

    WORK = "work"
    PRIVATE = "private"

    __str__ = str.__str__


EmailTypeOrStr: TypeAlias = Annotated[EmailType | str, open_enum_validator(EmailType)]
