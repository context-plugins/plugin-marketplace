from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XDryRun(str, Enum):
    TRUE = "true"

    __str__ = str.__str__


XDryRunOrStr: TypeAlias = Annotated[XDryRun | str, open_enum_validator(XDryRun)]
