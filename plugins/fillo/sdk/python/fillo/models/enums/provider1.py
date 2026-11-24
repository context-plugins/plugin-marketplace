from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Provider1(str, Enum):
    NOTION = "notion"
    SLACK = "slack"
    HUBSPOT = "hubspot"
    DISCORD = "discord"

    __str__ = str.__str__


Provider1OrStr: TypeAlias = Annotated[Provider1 | str, open_enum_validator(Provider1)]
