from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TargetRefType(str, Enum):
    BRANCH = "BRANCH"
    TAG = "TAG"
    ANNOTATED_TAG = "ANNOTATED_TAG"

    __str__ = str.__str__


TargetRefTypeOrStr: TypeAlias = Annotated[TargetRefType | str, open_enum_validator(TargetRefType)]
