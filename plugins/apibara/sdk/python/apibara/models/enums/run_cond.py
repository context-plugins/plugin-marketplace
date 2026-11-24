from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RunCond(str, Enum):
    RUN_DRIVE_VERIFIED = "Run & Drive Verified"
    RUNS_AND_DRIVES = "RUNS AND DRIVES"
    ENGINE_START_PROGRAM = "ENGINE START PROGRAM"
    STATIONARY_NO_INFORMATION = "STATIONARY / NO INFORMATION"
    STATIONARY = "STATIONARY"
    NO_INFORMATION = "NO INFORMATION"

    __str__ = str.__str__


RunCondOrStr: TypeAlias = Annotated[RunCond | str, open_enum_validator(RunCond)]
