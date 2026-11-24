from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Severity(str, Enum):
    """What a fail means: block = do not engage, warn = verify first, info = never changes the recommendation"""

    BLOCK = "block"
    WARN = "warn"
    INFO = "info"

    __str__ = str.__str__


SeverityOrStr: TypeAlias = Annotated[Severity | str, open_enum_validator(Severity)]
