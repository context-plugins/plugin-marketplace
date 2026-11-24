from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeBundleSocialMiscApi(str, Enum):
    USER = "USER"
    PAGE = "PAGE"

    __str__ = str.__str__


TypeBundleSocialMiscApiOrStr: TypeAlias = Annotated[
    TypeBundleSocialMiscApi | str, open_enum_validator(TypeBundleSocialMiscApi)
]
