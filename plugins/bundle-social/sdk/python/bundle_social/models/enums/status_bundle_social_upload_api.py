from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialUploadApi(str, Enum):
    USED = "USED"
    UNUSED = "UNUSED"

    __str__ = str.__str__


StatusBundleSocialUploadApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialUploadApi | str, open_enum_validator(StatusBundleSocialUploadApi)
]
