from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """Type of alias."""

    ALIAS_TYPE_UNSPECIFIED = "ALIAS_TYPE_UNSPECIFIED"
    CERT = "CERT"
    KEY_CERT = "KEY_CERT"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
