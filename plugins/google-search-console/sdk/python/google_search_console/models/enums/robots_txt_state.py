from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RobotsTxtState(str, Enum):
    """Whether or not the page is blocked to Google by a robots.txt rule."""

    ROBOTS_TXT_STATE_UNSPECIFIED = "ROBOTS_TXT_STATE_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    DISALLOWED = "DISALLOWED"

    __str__ = str.__str__


RobotsTxtStateOrStr: TypeAlias = Annotated[RobotsTxtState | str, open_enum_validator(RobotsTxtState)]
