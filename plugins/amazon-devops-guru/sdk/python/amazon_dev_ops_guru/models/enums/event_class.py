from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventClass(str, Enum):
    """The class of the event. The class specifies what the event is related to, such as an infrastructure change, a
    deployment, or a schema change."""

    INFRASTRUCTURE = "INFRASTRUCTURE"
    DEPLOYMENT = "DEPLOYMENT"
    SECURITY_CHANGE = "SECURITY_CHANGE"
    CONFIG_CHANGE = "CONFIG_CHANGE"
    SCHEMA_CHANGE = "SCHEMA_CHANGE"

    __str__ = str.__str__


EventClassOrStr: TypeAlias = Annotated[EventClass | str, open_enum_validator(EventClass)]
