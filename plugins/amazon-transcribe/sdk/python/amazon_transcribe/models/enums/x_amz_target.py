from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY = "Transcribe.CreateCallAnalyticsCategory"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
