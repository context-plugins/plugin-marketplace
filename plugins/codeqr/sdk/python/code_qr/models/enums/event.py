from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    """The type of event to retrieve analytics for. Defaults to 'analytics'."""

    CLICKS = "clicks"
    LEADS = "leads"
    SALES = "sales"
    SCANS = "scans"
    VIEWS = "views"
    COMPOSITE = "composite"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
