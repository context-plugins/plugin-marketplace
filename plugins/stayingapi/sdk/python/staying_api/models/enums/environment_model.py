from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentModel(str, Enum):
    """Authenticated key environment used for this response. ``test`` means deterministic sandbox fixtures, never a live
    scrape."""

    LIVE = "live"
    TEST = "test"

    __str__ = str.__str__


EnvironmentModelOrStr: TypeAlias = Annotated[EnvironmentModel | str, open_enum_validator(EnvironmentModel)]
