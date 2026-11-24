from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventDataRetention(str, Enum):
    """Required. The length of time that event-level data is retained."""

    RETENTION_DURATION_UNSPECIFIED = "RETENTION_DURATION_UNSPECIFIED"
    TWO_MONTHS = "TWO_MONTHS"
    FOURTEEN_MONTHS = "FOURTEEN_MONTHS"
    TWENTY_SIX_MONTHS = "TWENTY_SIX_MONTHS"
    THIRTY_EIGHT_MONTHS = "THIRTY_EIGHT_MONTHS"
    FIFTY_MONTHS = "FIFTY_MONTHS"

    __str__ = str.__str__


EventDataRetentionOrStr: TypeAlias = Annotated[EventDataRetention | str, open_enum_validator(EventDataRetention)]
