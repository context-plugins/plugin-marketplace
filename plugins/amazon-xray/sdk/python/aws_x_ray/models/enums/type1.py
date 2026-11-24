from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default encryption."""

    NONE = "NONE"
    KMS = "KMS"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
