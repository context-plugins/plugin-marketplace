from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The health status of the Epic or Objective."""

    AT_RISK = "At Risk"
    ON_TRACK = "On Track"
    OFF_TRACK = "Off Track"
    NO_HEALTH = "No Health"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
