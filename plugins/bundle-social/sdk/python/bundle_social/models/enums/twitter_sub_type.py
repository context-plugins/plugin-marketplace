from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TwitterSubType(str, Enum):
    NONE = "none"
    BASIC = "basic"
    PREMIUM = "premium"
    PREMIUM_PLUS = "premium_plus"

    __str__ = str.__str__


TwitterSubTypeOrStr: TypeAlias = Annotated[TwitterSubType | str, open_enum_validator(TwitterSubType)]
