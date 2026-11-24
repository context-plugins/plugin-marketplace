from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlGtidPosition2(SdkBaseModel):
    """MySQL GTID set to start replicating from."""

    gtid_set: Optional[str] = Field(default=UNSET, alias="gtidSet")
    """Required. The gtid set to start replication from."""


class MysqlGtidPosition2Dict(TypedDict):
    gtid_set: NotRequired[str]
