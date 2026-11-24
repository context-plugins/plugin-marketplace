from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class SparkRJob1(SdkBaseModel):
    """Optional. Job is a SparkR job."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job
    properties, since a collision may occur that causes an incorrect job submission."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel
    tasks."""

    main_r_file_uri: Optional[str] = Field(default=UNSET, alias="mainRFileUri")
    """Required. The HCFS URI of the main R file to use as the driver. Must be a .R file."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and
    classes in user code."""


class SparkRJob1Dict(TypedDict):
    args: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    file_uris: NotRequired[list[str]]
    main_r_file_uri: NotRequired[str]
    logging_config: NotRequired[LoggingConfig1Dict]
    properties: NotRequired[dict[str, str]]
