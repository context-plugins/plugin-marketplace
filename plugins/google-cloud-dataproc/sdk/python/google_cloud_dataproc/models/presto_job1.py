from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict
from .query_list2 import QueryList2, QueryList2Dict


class PrestoJob1(SdkBaseModel):
    """Optional. Job is a Presto job."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values. Used to set Presto session properties
    (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI"""

    query_list: Optional[QueryList2] = Field(default=UNSET, alias="queryList")
    """A list of queries."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    continue_on_failure: Optional[bool] = Field(default=UNSET, alias="continueOnFailure")
    """Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can
    be useful when executing independent parallel queries."""

    client_tags: Optional[list[str]] = Field(default=UNSET, alias="clientTags")
    """Optional. Presto client tags to attach to this query"""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """The HCFS URI of the script that contains SQL queries."""

    output_format: Optional[str] = Field(default=UNSET, alias="outputFormat")
    """Optional. The format in which query output will be displayed. See the Presto documentation for supported output
    formats"""


class PrestoJob1Dict(TypedDict):
    properties: NotRequired[dict[str, str]]
    query_list: NotRequired[QueryList2Dict]
    logging_config: NotRequired[LoggingConfig1Dict]
    continue_on_failure: NotRequired[bool]
    client_tags: NotRequired[list[str]]
    query_file_uri: NotRequired[str]
    output_format: NotRequired[str]
