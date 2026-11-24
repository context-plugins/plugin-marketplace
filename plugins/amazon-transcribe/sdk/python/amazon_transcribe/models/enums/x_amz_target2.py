from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY = "Transcribe.GetCallAnalyticsCategory"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
