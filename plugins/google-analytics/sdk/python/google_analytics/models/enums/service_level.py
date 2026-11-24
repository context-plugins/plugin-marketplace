from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceLevel(str, Enum):
    """Output only. The Google Analytics service level that applies to this property."""

    SERVICE_LEVEL_UNSPECIFIED = "SERVICE_LEVEL_UNSPECIFIED"
    GOOGLE_ANALYTICS_STANDARD = "GOOGLE_ANALYTICS_STANDARD"
    GOOGLE_ANALYTICS_360 = "GOOGLE_ANALYTICS_360"

    __str__ = str.__str__


ServiceLevelOrStr: TypeAlias = Annotated[ServiceLevel | str, open_enum_validator(ServiceLevel)]
