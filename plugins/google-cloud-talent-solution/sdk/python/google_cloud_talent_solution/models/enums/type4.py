from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4(str, Enum):
    COMPLETION_TYPE_UNSPECIFIED = "COMPLETION_TYPE_UNSPECIFIED"
    JOB_TITLE = "JOB_TITLE"
    COMPANY_NAME = "COMPANY_NAME"
    COMBINED = "COMBINED"

    __str__ = str.__str__


Type4OrStr: TypeAlias = Annotated[Type4 | str, open_enum_validator(Type4)]
