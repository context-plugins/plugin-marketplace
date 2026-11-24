from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    MEDIA_UPLOADED = "MEDIA_UPLOADED"
    MEDIA_PROCESSING = "MEDIA_PROCESSING"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
