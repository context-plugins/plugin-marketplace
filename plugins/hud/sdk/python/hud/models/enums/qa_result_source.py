from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QaResultSource(str, Enum):
    """Where a result's verdict comes from."""

    ANALYSIS = "analysis"
    SKIPPED = "skipped"
    MANUAL = "manual"

    __str__ = str.__str__


QaResultSourceOrStr: TypeAlias = Annotated[QaResultSource | str, open_enum_validator(QaResultSource)]
