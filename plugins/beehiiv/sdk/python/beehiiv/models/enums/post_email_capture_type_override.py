from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostEmailCaptureTypeOverride(str, Enum):
    NONE = "none"
    GATED = "gated"
    POPUP = "popup"

    __str__ = str.__str__


PostEmailCaptureTypeOverrideOrStr: TypeAlias = Annotated[
    PostEmailCaptureTypeOverride | str, open_enum_validator(PostEmailCaptureTypeOverride)
]
