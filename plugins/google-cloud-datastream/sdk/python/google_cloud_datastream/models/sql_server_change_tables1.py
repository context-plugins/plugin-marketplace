from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_ddl_config2 import SqlServerDdlConfig2, SqlServerDdlConfig2Dict


class SqlServerChangeTables1(SdkBaseModel):
    """CDC reader reads from change tables."""

    ddl_config: Optional[SqlServerDdlConfig2] = Field(default=UNSET, alias="ddlConfig")
    """Optional. DDL configuration for change tables."""


class SqlServerChangeTables1Dict(TypedDict):
    ddl_config: NotRequired[SqlServerDdlConfig2Dict]
