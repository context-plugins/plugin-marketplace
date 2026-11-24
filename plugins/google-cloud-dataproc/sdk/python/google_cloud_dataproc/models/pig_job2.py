from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict
from .query_list2 import QueryList2, QueryList2Dict


class PigJob2(SdkBaseModel):
    """Optional. Job is a Pig job."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    script_variables: Optional[dict[str, str]] = Field(default=UNSET, alias="scriptVariables")
    """Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value])."""

    query_list: Optional[QueryList2] = Field(default=UNSET, alias="queryList")
    """A list of queries."""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """The HCFS URI of the script that contains the Pig queries."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set
    by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml,
    /etc/pig/conf/pig.properties, and classes in user code."""

    continue_on_failure: Optional[bool] = Field(default=UNSET, alias="continueOnFailure")
    """Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can
    be useful when executing independent parallel queries."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can
    contain Pig UDFs."""


class PigJob2Dict(TypedDict):
    logging_config: NotRequired[LoggingConfig1Dict]
    script_variables: NotRequired[dict[str, str]]
    query_list: NotRequired[QueryList2Dict]
    query_file_uri: NotRequired[str]
    properties: NotRequired[dict[str, str]]
    continue_on_failure: NotRequired[bool]
    jar_file_uris: NotRequired[list[str]]
