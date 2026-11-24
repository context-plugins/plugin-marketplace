from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class SparkJob2(SdkBaseModel):
    """Optional. Job is a Spark job."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel
    tasks."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    main_class: Optional[str] = Field(default=UNSET, alias="mainClass")
    """The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or
    specified in SparkJob.jar_file_uris."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job
    properties, since a collision may occur that causes an incorrect job submission."""

    main_jar_file_uri: Optional[str] = Field(default=UNSET, alias="mainJarFileUri")
    """The HCFS URI of the jar file that contains the main class."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and
    classes in user code."""


class SparkJob2Dict(TypedDict):
    file_uris: NotRequired[list[str]]
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    main_class: NotRequired[str]
    args: NotRequired[list[str]]
    main_jar_file_uri: NotRequired[str]
    logging_config: NotRequired[LoggingConfig1Dict]
    properties: NotRequired[dict[str, str]]
