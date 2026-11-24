from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventCodeqrIoEventsApi(str, Enum):
    """The type of event to retrieve analytics for. Defaults to 'clicks'."""

    CLICKS = "clicks"
    LEADS = "leads"
    SALES = "sales"
    SCANS = "scans"
    VIEWS = "views"

    __str__ = str.__str__


EventCodeqrIoEventsApiOrStr: TypeAlias = Annotated[
    EventCodeqrIoEventsApi | str, open_enum_validator(EventCodeqrIoEventsApi)
]
