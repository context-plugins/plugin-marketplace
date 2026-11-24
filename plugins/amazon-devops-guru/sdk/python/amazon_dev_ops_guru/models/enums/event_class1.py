from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventClass1(str, Enum):
    """The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema
    change."""

    INFRASTRUCTURE = "INFRASTRUCTURE"
    DEPLOYMENT = "DEPLOYMENT"
    SECURITY_CHANGE = "SECURITY_CHANGE"
    CONFIG_CHANGE = "CONFIG_CHANGE"
    SCHEMA_CHANGE = "SCHEMA_CHANGE"

    __str__ = str.__str__


EventClass1OrStr: TypeAlias = Annotated[EventClass1 | str, open_enum_validator(EventClass1)]
