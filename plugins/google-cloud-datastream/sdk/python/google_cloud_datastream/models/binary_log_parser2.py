from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .log_file_directories2 import LogFileDirectories2, LogFileDirectories2Dict


class BinaryLogParser2(SdkBaseModel):
    """Use Binary Log Parser."""

    log_file_directories: Optional[LogFileDirectories2] = Field(default=UNSET, alias="logFileDirectories")
    """Use Oracle directories."""

    oracle_asm_log_file_access: Optional[Any] = Field(default=UNSET, alias="oracleAsmLogFileAccess")
    """Use Oracle ASM."""


class BinaryLogParser2Dict(TypedDict):
    log_file_directories: NotRequired[LogFileDirectories2Dict]
    oracle_asm_log_file_access: NotRequired[Any]
