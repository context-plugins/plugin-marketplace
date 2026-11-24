from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EngagePolicy(str, Enum):
    STRICT = "strict"
    BALANCED = "balanced"
    PERMISSIVE = "permissive"

    __str__ = str.__str__


EngagePolicyOrStr: TypeAlias = Annotated[EngagePolicy | str, open_enum_validator(EngagePolicy)]
