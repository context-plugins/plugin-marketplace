from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostEmailCaptureTypeOverride2(str, Enum):
    """The email capture type to use for this post."""

    NONE = "none"
    GATED = "gated"
    POPUP = "popup"

    __str__ = str.__str__


PostEmailCaptureTypeOverride2OrStr: TypeAlias = Annotated[
    PostEmailCaptureTypeOverride2 | str, open_enum_validator(PostEmailCaptureTypeOverride2)
]
