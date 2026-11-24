from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AcceptedEmailType(str, Enum):
    PROFESSIONAL = "professional"
    PERSONAL = "personal"

    __str__ = str.__str__


AcceptedEmailTypeOrStr: TypeAlias = Annotated[AcceptedEmailType | str, open_enum_validator(AcceptedEmailType)]
