from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostEmailCaptureTypeOverride1(str, Enum):
    """The email capture type to use for this post. If not provided, the default value will be used."""

    NONE = "none"
    GATED = "gated"
    POPUP = "popup"

    __str__ = str.__str__


PostEmailCaptureTypeOverride1OrStr: TypeAlias = Annotated[
    PostEmailCaptureTypeOverride1 | str, open_enum_validator(PostEmailCaptureTypeOverride1)
]
