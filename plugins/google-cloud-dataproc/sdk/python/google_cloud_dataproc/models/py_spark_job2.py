from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class PySparkJob2(SdkBaseModel):
    """Optional. Job is a PySpark job."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values
    set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and
    classes in user code."""

    main_python_file_uri: Optional[str] = Field(default=UNSET, alias="mainPythonFileUri")
    """Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. The runtime log config for job execution."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job
    properties, since a collision may occur that causes an incorrect job submission."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel
    tasks."""

    python_file_uris: Optional[list[str]] = Field(default=UNSET, alias="pythonFileUris")
    """Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and
    .zip."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip.Note: Spark applications must be deployed in cluster mode
    (https://spark.apache.org/docs/latest/cluster-overview.html) for correct environment propagation."""


class PySparkJob2Dict(TypedDict):
    properties: NotRequired[dict[str, str]]
    main_python_file_uri: NotRequired[str]
    logging_config: NotRequired[LoggingConfig1Dict]
    args: NotRequired[list[str]]
    file_uris: NotRequired[list[str]]
    python_file_uris: NotRequired[list[str]]
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
