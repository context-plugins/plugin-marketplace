from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type5BundleSocialPostApi(str, Enum):
    VIDEO = "VIDEO"
    SHORT = "SHORT"

    __str__ = str.__str__


Type5BundleSocialPostApiOrStr: TypeAlias = Annotated[
    Type5BundleSocialPostApi | str, open_enum_validator(Type5BundleSocialPostApi)
]
