from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceHudPlatformJobsApi(str, Enum):
    SYSTEM = "system"
    USER = "user"
    AGENT = "agent"

    __str__ = str.__str__


SourceHudPlatformJobsApiOrStr: TypeAlias = Annotated[
    SourceHudPlatformJobsApi | str, open_enum_validator(SourceHudPlatformJobsApi)
]
