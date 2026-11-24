from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BucketOwnerAccess(str, Enum):
    NONE = "NONE"
    READ_ONLY = "READ_ONLY"
    FULL = "FULL"

    __str__ = str.__str__


BucketOwnerAccessOrStr: TypeAlias = Annotated[BucketOwnerAccess | str, open_enum_validator(BucketOwnerAccess)]
