from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RunScope(str, Enum):
    """Controls which rows a column operation applies to. ``all`` re-runs every row, including already-processed ones.
    ``missing`` only runs rows that don't have a value for this column yet. ``specific`` requires ``entityIds``."""

    ALL = "all"
    MISSING = "missing"
    SPECIFIC = "specific"

    __str__ = str.__str__


RunScopeOrStr: TypeAlias = Annotated[RunScope | str, open_enum_validator(RunScope)]
