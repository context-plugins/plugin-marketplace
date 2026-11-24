from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MobileFriendliness(str, Enum):
    """Test verdict, whether the page is mobile friendly or not."""

    MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
    MOBILE_FRIENDLY = "MOBILE_FRIENDLY"
    NOT_MOBILE_FRIENDLY = "NOT_MOBILE_FRIENDLY"

    __str__ = str.__str__


MobileFriendlinessOrStr: TypeAlias = Annotated[MobileFriendliness | str, open_enum_validator(MobileFriendliness)]
