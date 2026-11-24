from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict
from .query_list2 import QueryList2, QueryList2Dict


class TrinoJob2(SdkBaseModel):
    """Optional. Job is a Trino job."""

    query_file_uri: Optional[str] = Field(default=UNSET, alias="queryFileUri")
    """The HCFS URI of the script that contains SQL queries."""

    continue_on_failure: Optional[bool] = Field(default=UNSET, alias="continueOnFailure")
    """Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can
    be useful when executing independent parallel queries."""

    output_format: Optional[str] = Field(default=UNSET, alias="outputFormat")
    """Optional. The format in which query output will be displayed. See the Trino documentation for supported output
    formats"""

    client_tags: Optional[list[str]] = Field(default=UNSET, alias="clientTags")
    """Optional. Trino client tags to attach to this query"""

    query_list: Optional[QueryList2] = Field(default=UNSET, alias="queryList")
    """A list of queries."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values. Used to set Trino session properties
    (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI"""


class TrinoJob2Dict(TypedDict):
    query_file_uri: NotRequired[str]
    continue_on_failure: NotRequired[bool]
    output_format: NotRequired[str]
    client_tags: NotRequired[list[str]]
    query_list: NotRequired[QueryList2Dict]
    logging_config: NotRequired[LoggingConfig1Dict]
    properties: NotRequired[dict[str, str]]
