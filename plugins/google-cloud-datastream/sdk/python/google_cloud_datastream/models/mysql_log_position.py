from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlLogPosition(SdkBaseModel):
    """MySQL log position"""

    log_file: Optional[str] = Field(default=UNSET, alias="logFile")
    """Required. The binary log file name."""

    log_position: Optional[int] = Field(default=UNSET, alias="logPosition")
    """Optional. The position within the binary log file. Default is head of file."""


class MysqlLogPositionDict(TypedDict):
    log_file: NotRequired[str]
    log_position: NotRequired[int]
