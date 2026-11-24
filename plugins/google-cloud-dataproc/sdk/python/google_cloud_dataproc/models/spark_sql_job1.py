from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict
from .query_list2 import QueryList2, QueryList2Dict


class SparkSqlJob1(SdkBaseModel):
    """Optional. Job is a SparkSql job."""

    script_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="scriptVariables")
    """Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";)."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that
    conflict with values set by the Dataproc API might be overwritten."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    query_list: Optional[QueryList2] = Field(default=UNSET, alias="queryList")
    """A list of queries."""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """The HCFS URI of the script that contains SQL queries."""


class SparkSqlJob1Dict(TypedDict):
    script_variables: NotRequired[dict[str, str]]
    jar_file_uris: NotRequired[list[str]]
    properties: NotRequired[dict[str, str]]
    logging_config: NotRequired[LoggingConfig1Dict]
    query_list: NotRequired[QueryList2Dict]
    query_file_uri: NotRequired[str]
