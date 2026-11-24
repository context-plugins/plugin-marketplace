from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SqlServerLsnPosition1(SdkBaseModel):
    """SqlServer LSN to start replicating from."""

    lsn: Optional[str] = UNSET
    """Required. Log sequence number (LSN) from where Logs will be read"""


class SqlServerLsnPosition1Dict(TypedDict):
    lsn: NotRequired[str]
