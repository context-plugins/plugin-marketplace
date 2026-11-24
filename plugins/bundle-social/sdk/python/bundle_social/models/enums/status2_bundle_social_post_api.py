from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2BundleSocialPostApi(str, Enum):
    MEDIA_UPLOADED = "MEDIA_UPLOADED"
    MEDIA_PROCESSING = "MEDIA_PROCESSING"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


Status2BundleSocialPostApiOrStr: TypeAlias = Annotated[
    Status2BundleSocialPostApi | str, open_enum_validator(Status2BundleSocialPostApi)
]
