from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RdsHttpEndpointConfig(SdkBaseModel):
    aws_region: Optional[str] = Field(default=UNSET, alias="awsRegion")
    """Amazon Web Services Region for Amazon RDS HTTP endpoint."""

    db_cluster_identifier: Optional[str] = Field(default=UNSET, alias="dbClusterIdentifier")
    """Amazon RDS cluster Amazon Resource Name (ARN)."""

    database_name: Optional[str] = Field(default=UNSET, alias="databaseName")
    """Logical database name."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """Logical schema name."""

    aws_secret_store_arn: Optional[str] = Field(default=UNSET, alias="awsSecretStoreArn")
    """Amazon Web Services secret store Amazon Resource Name (ARN) for database credentials."""


class RdsHttpEndpointConfigDict(TypedDict):
    aws_region: NotRequired[str]
    db_cluster_identifier: NotRequired[str]
    database_name: NotRequired[str]
    schema_value: NotRequired[str]
    aws_secret_store_arn: NotRequired[str]
