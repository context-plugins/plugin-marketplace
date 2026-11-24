from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .delta_sync_config import DeltaSyncConfig, DeltaSyncConfigDict


class DynamodbDataSourceConfig(SdkBaseModel):
    table_name: str = Field(alias="tableName")
    """The table name."""

    aws_region: str = Field(alias="awsRegion")
    """The Amazon Web Services Region."""

    use_caller_credentials: Optional[bool] = Field(default=UNSET, alias="useCallerCredentials")
    """Set to TRUE to use Amazon Cognito credentials with this data source."""

    delta_sync_config: Optional[DeltaSyncConfig] = Field(default=UNSET, alias="deltaSyncConfig")
    versioned: Optional[bool] = UNSET
    """Set to TRUE to use Conflict Detection and Resolution with this data source."""


class DynamodbDataSourceConfigDict(TypedDict):
    table_name: str
    aws_region: str
    use_caller_credentials: NotRequired[bool]
    delta_sync_config: NotRequired[DeltaSyncConfigDict]
    versioned: NotRequired[bool]
