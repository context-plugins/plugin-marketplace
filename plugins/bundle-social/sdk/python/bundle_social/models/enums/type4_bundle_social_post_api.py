from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4BundleSocialPostApi(str, Enum):
    VIDEO = "VIDEO"
    IMAGE = "IMAGE"

    __str__ = str.__str__


Type4BundleSocialPostApiOrStr: TypeAlias = Annotated[
    Type4BundleSocialPostApi | str, open_enum_validator(Type4BundleSocialPostApi)
]
