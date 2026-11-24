from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResultStatus(str, Enum):
    """Output only. The migration result status for the database. This is only set if the migration is not a dry run."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"

    __str__ = str.__str__


ResultStatusOrStr: TypeAlias = Annotated[ResultStatus | str, open_enum_validator(ResultStatus)]
