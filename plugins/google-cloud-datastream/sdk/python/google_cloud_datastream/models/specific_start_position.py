from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_change_stream_position2 import MongodbChangeStreamPosition2, MongodbChangeStreamPosition2Dict
from .mysql_gtid_position2 import MysqlGtidPosition2, MysqlGtidPosition2Dict
from .mysql_log_position1 import MysqlLogPosition1, MysqlLogPosition1Dict
from .oracle_scn_position2 import OracleScnPosition2, OracleScnPosition2Dict
from .spanner_change_stream_position2 import SpannerChangeStreamPosition2, SpannerChangeStreamPosition2Dict
from .sql_server_lsn_position1 import SqlServerLsnPosition1, SqlServerLsnPosition1Dict


class SpecificStartPosition(SdkBaseModel):
    """CDC strategy to start replicating from a specific position in the source."""

    oracle_scn_position: Optional[OracleScnPosition2] = Field(default=UNSET, alias="oracleScnPosition")
    """Oracle SCN to start replicating from."""

    mysql_gtid_position: Optional[MysqlGtidPosition2] = Field(default=UNSET, alias="mysqlGtidPosition")
    """MySQL GTID set to start replicating from."""

    mysql_log_position: Optional[MysqlLogPosition1] = Field(default=UNSET, alias="mysqlLogPosition")
    """MySQL specific log position to start replicating from."""

    mongodb_change_stream_position: Optional[MongodbChangeStreamPosition2] = Field(
        default=UNSET, alias="mongodbChangeStreamPosition"
    )
    """MongoDB change stream position to start replicating from."""

    sql_server_lsn_position: Optional[SqlServerLsnPosition1] = Field(default=UNSET, alias="sqlServerLsnPosition")
    """SqlServer LSN to start replicating from."""

    spanner_change_stream_position: Optional[SpannerChangeStreamPosition2] = Field(
        default=UNSET, alias="spannerChangeStreamPosition"
    )
    """Optional. Spanner change stream position to start replicating from."""


class SpecificStartPositionDict(TypedDict):
    oracle_scn_position: NotRequired[OracleScnPosition2Dict]
    mysql_gtid_position: NotRequired[MysqlGtidPosition2Dict]
    mysql_log_position: NotRequired[MysqlLogPosition1Dict]
    mongodb_change_stream_position: NotRequired[MongodbChangeStreamPosition2Dict]
    sql_server_lsn_position: NotRequired[SqlServerLsnPosition1Dict]
    spanner_change_stream_position: NotRequired[SpannerChangeStreamPosition2Dict]
