from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1ShortcutObjectivesApi(str, Enum):
    """The health status of the Objective."""

    AT_RISK = "At Risk"
    ON_TRACK = "On Track"
    OFF_TRACK = "Off Track"
    NO_HEALTH = "No Health"

    __str__ = str.__str__


Status1ShortcutObjectivesApiOrStr: TypeAlias = Annotated[
    Status1ShortcutObjectivesApi | str, open_enum_validator(Status1ShortcutObjectivesApi)
]
