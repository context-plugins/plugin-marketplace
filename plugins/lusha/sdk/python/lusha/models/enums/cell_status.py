from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CellStatus(str, Enum):
    """Current state of a single cell's data. ``no_data`` means the run succeeded but found nothing — distinct from
    ``failed``, which means the run itself errored."""

    NOT_RUN = "not_run"
    PROCESSING = "processing"
    SUCCESS = "success"
    NO_DATA = "no_data"
    FAILED = "failed"

    __str__ = str.__str__


CellStatusOrStr: TypeAlias = Annotated[CellStatus | str, open_enum_validator(CellStatus)]
