from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PerformanceInsightsMetricDimensionGroup(SdkBaseModel):
    group: Optional[str] = Field(default=UNSET, alias="Group")
    """The name of the dimension group. Its valid values are: db - The name of the database to which the client is
    connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)
    db.application - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS
    PostgreSQL) db.host - The host name of the connected client (all engines) db.session_type - The type of the current
    session (only Aurora PostgreSQL and RDS PostgreSQL) db.sql - The SQL that is currently executing (all engines)
    db.sql_tokenized - The SQL digest (all engines) db."""

    dimensions: Optional[list[str]] = Field(default=UNSET, alias="Dimensions")
    """A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that
    all of the dimensions in the group were requested or are present in the response. Valid values for elements in the
    Dimensions array are: db.application.name - The name of the application that is connected to the database (only
    Aurora PostgreSQL and RDS PostgreSQL) db.host.id - The host ID of the connected client (all engines) db.host.name -
    The host name of the connected client (all engines) db.name - The name of the database to which the client is
    connected (only Aurora PostgreSQL, A"""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """The maximum number of items to fetch for this dimension group."""


class PerformanceInsightsMetricDimensionGroupDict(TypedDict):
    group: NotRequired[str]
    dimensions: NotRequired[list[str]]
    limit: NotRequired[int]
