from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.relational_database_source_type import RelationalDatabaseSourceTypeOrStr
from .rds_http_endpoint_config import RdsHttpEndpointConfig, RdsHttpEndpointConfigDict


class RelationalDatabaseDataSourceConfig(SdkBaseModel):
    relational_database_source_type: Optional[RelationalDatabaseSourceTypeOrStr] = Field(
        default=UNSET, alias="relationalDatabaseSourceType"
    )
    """Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type is an Amazon
    Relational Database Service (Amazon RDS) HTTP endpoint."""

    rds_http_endpoint_config: Optional[RdsHttpEndpointConfig] = Field(default=UNSET, alias="rdsHttpEndpointConfig")


class RelationalDatabaseDataSourceConfigDict(TypedDict):
    relational_database_source_type: NotRequired[RelationalDatabaseSourceTypeOrStr]
    rds_http_endpoint_config: NotRequired[RdsHttpEndpointConfigDict]
