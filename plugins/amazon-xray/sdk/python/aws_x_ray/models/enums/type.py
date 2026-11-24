from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default encryption."""

    NONE = "NONE"
    KMS = "KMS"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
