from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Info(str, Enum):
    VALIDATION = "validation"
    FORMAT = "format"
    SIGNER = "signer"

    __str__ = str.__str__


InfoOrStr: TypeAlias = Annotated[Info | str, open_enum_validator(Info)]
