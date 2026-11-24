from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentEncoding(str, Enum):
    GZIP = "gzip"

    __str__ = str.__str__


ContentEncodingOrStr: TypeAlias = Annotated[ContentEncoding | str, open_enum_validator(ContentEncoding)]
