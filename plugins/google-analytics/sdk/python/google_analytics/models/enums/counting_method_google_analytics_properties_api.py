from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CountingMethodGoogleAnalyticsPropertiesApi(str, Enum):
    """Required. The method by which Key Events will be counted across multiple events within a session."""

    COUNTING_METHOD_UNSPECIFIED = "COUNTING_METHOD_UNSPECIFIED"
    ONCE_PER_EVENT = "ONCE_PER_EVENT"
    ONCE_PER_SESSION = "ONCE_PER_SESSION"

    __str__ = str.__str__


CountingMethodGoogleAnalyticsPropertiesApiOrStr: TypeAlias = Annotated[
    CountingMethodGoogleAnalyticsPropertiesApi | str, open_enum_validator(CountingMethodGoogleAnalyticsPropertiesApi)
]
