from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RefType(str, Enum):
    REF_TYPE_UNSPECIFIED = "REF_TYPE_UNSPECIFIED"
    TAG = "TAG"
    BRANCH = "BRANCH"

    __str__ = str.__str__


RefTypeOrStr: TypeAlias = Annotated[RefType | str, open_enum_validator(RefType)]
