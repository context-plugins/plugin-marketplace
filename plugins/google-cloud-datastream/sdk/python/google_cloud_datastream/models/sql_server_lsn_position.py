from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SqlServerLsnPosition(SdkBaseModel):
    """SQL Server LSN position"""

    lsn: Optional[str] = UNSET
    """Required. Log sequence number (LSN) from where Logs will be read"""


class SqlServerLsnPositionDict(TypedDict):
    lsn: NotRequired[str]
