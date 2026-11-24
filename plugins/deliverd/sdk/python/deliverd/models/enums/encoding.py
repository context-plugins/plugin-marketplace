from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Encoding(str, Enum):
    UTF8 = "utf8"
    BASE64 = "base64"

    __str__ = str.__str__


EncodingOrStr: TypeAlias = Annotated[Encoding | str, open_enum_validator(Encoding)]
