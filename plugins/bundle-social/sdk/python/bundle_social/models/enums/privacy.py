from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Privacy(str, Enum):
    SELF_ONLY = "SELF_ONLY"
    PUBLIC_TO_EVERYONE = "PUBLIC_TO_EVERYONE"
    MUTUAL_FOLLOW_FRIENDS = "MUTUAL_FOLLOW_FRIENDS"
    FOLLOWER_OF_CREATOR = "FOLLOWER_OF_CREATOR"

    __str__ = str.__str__


PrivacyOrStr: TypeAlias = Annotated[Privacy | str, open_enum_validator(Privacy)]
