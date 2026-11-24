from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FailOn(str, Enum):
    """What counts as failing, for CI: rejected_allowed (default), loosened, changed or never"""

    NEVER = "never"
    REJECTED_ALLOWED = "rejected_allowed"
    LOOSENED = "loosened"
    CHANGED = "changed"

    __str__ = str.__str__


FailOnOrStr: TypeAlias = Annotated[FailOn | str, open_enum_validator(FailOn)]
