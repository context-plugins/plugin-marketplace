from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlGtidPosition(SdkBaseModel):
    """MySQL GTID position"""

    gtid_set: Optional[str] = Field(default=UNSET, alias="gtidSet")
    """Required. The gtid set to start replication from."""


class MysqlGtidPositionDict(TypedDict):
    gtid_set: NotRequired[str]
