from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.log_level_dto import LogLevelDtoOrStr


class LogsContentDto(SdkBaseModel):
    index: int
    level: LogLevelDtoOrStr
    message: str
    timestamp: RFC3339DateTime


class LogsContentDtoDict(TypedDict):
    index: int
    level: LogLevelDtoOrStr
    message: str
    timestamp: RFC3339DateTime
