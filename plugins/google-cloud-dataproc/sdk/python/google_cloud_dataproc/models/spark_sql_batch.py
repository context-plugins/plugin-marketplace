from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkSqlBatch(SdkBaseModel):
    """A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload."""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """Required. The HCFS URI of the script that contains Spark SQL queries to execute."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH."""

    query_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="queryVariables")
    """Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";)."""


class SparkSqlBatchDict(TypedDict):
    query_file_uri: NotRequired[str]
    jar_file_uris: NotRequired[list[str]]
    query_variables: NotRequired[dict[str, str]]
