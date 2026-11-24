from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Policy(str, Enum):
    PUBLISHABLE_KEY = "publishable_key"
    TRUSTED_ONLY = "trusted_only"

    __str__ = str.__str__


PolicyOrStr: TypeAlias = Annotated[Policy | str, open_enum_validator(Policy)]
