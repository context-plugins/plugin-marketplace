from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Unit(str, Enum):
    """Specifies the unit represented by the value field. **Mutually exclusive with currency.**"""

    COUNT = "count"
    SECONDS = "seconds"
    MILLISECONDS = "milliseconds"

    __str__ = str.__str__


UnitOrStr: TypeAlias = Annotated[Unit | str, open_enum_validator(Unit)]
