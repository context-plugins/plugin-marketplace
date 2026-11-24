from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TargetSelectorType(str, Enum):
    BRANCH = "BRANCH"
    TAG = "TAG"
    CUSTOM = "CUSTOM"
    PULLREQUESTS = "PULLREQUESTS"
    DEFAULT = "DEFAULT"

    __str__ = str.__str__


TargetSelectorTypeOrStr: TypeAlias = Annotated[TargetSelectorType | str, open_enum_validator(TargetSelectorType)]
