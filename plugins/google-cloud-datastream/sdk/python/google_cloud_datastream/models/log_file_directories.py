from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LogFileDirectories(SdkBaseModel):
    """Configuration to specify the Oracle directories to access the log files."""

    archived_log_directory: Optional[str] = Field(default=UNSET, alias="archivedLogDirectory")
    """Required. Oracle directory for archived logs."""

    online_log_directory: Optional[str] = Field(default=UNSET, alias="onlineLogDirectory")
    """Required. Oracle directory for online logs."""


class LogFileDirectoriesDict(TypedDict):
    archived_log_directory: NotRequired[str]
    online_log_directory: NotRequired[str]
