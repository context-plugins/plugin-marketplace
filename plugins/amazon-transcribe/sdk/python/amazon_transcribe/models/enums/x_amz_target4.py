from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    TRANSCRIBE_UPDATE_CALL_ANALYTICS_CATEGORY = "Transcribe.UpdateCallAnalyticsCategory"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
