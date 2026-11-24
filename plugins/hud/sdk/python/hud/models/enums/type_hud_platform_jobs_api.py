from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeHudPlatformJobsApi(str, Enum):
    TEXT = "text"
    IMAGE = "image"
    AUDIO = "audio"

    __str__ = str.__str__


TypeHudPlatformJobsApiOrStr: TypeAlias = Annotated[
    TypeHudPlatformJobsApi | str, open_enum_validator(TypeHudPlatformJobsApi)
]
