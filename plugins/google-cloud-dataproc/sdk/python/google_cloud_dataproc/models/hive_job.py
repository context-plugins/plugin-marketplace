from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .query_list2 import QueryList2, QueryList2Dict


class HiveJob(SdkBaseModel):
    """A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN."""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """The HCFS URI of the script that contains Hive queries."""

    query_list: Optional[QueryList2] = Field(default=UNSET, alias="queryList")
    """A list of queries."""

    continue_on_failure: Optional[bool] = Field(default=UNSET, alias="continueOnFailure")
    """Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can
    be useful when executing independent parallel queries."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
    /etc/hive/conf/hive-site.xml, and classes in user code."""

    script_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="scriptVariables")
    """Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";)."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can
    contain Hive SerDes and UDFs."""


class HiveJobDict(TypedDict):
    query_file_uri: NotRequired[str]
    query_list: NotRequired[QueryList2Dict]
    continue_on_failure: NotRequired[bool]
    properties: NotRequired[dict[str, str]]
    script_variables: NotRequired[dict[str, str]]
    jar_file_uris: NotRequired[list[str]]
