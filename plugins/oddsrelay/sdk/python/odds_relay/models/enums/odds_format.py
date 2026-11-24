from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OddsFormat(str, Enum):
    DECIMAL = "decimal"
    AMERICAN = "american"

    __str__ = str.__str__


OddsFormatOrStr: TypeAlias = Annotated[OddsFormat | str, open_enum_validator(OddsFormat)]
