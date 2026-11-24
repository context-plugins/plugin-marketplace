from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatRendexRenderingWatchApi(str, Enum):
    """A pdf cannot be visually diffed — pair it with diffMode ``text``."""

    PNG = "png"
    JPEG = "jpeg"
    WEBP = "webp"
    PDF = "pdf"

    __str__ = str.__str__


FormatRendexRenderingWatchApiOrStr: TypeAlias = Annotated[
    FormatRendexRenderingWatchApi | str, open_enum_validator(FormatRendexRenderingWatchApi)
]
