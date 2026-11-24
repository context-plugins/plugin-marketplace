from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QrcType(str, Enum):
    BITLINK = "bitlink"
    LONG_URL = "long_url"

    __str__ = str.__str__


QrcTypeOrStr: TypeAlias = Annotated[QrcType | str, open_enum_validator(QrcType)]
