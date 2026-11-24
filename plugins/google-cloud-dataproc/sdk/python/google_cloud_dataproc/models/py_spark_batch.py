from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PySparkBatch(SdkBaseModel):
    """A configuration for running an Apache PySpark
    (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    main_python_file_uri: Optional[str] = Field(default=UNSET, alias="mainPythonFileUri")
    """Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such
    as --conf, since a collision can occur that causes an incorrect batch submission."""

    python_file_uris: Optional[list[str]] = Field(default=UNSET, alias="pythonFileUris")
    """Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and
    .zip."""


class PySparkBatchDict(TypedDict):
    file_uris: NotRequired[list[str]]
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    main_python_file_uri: NotRequired[str]
    args: NotRequired[list[str]]
    python_file_uris: NotRequired[list[str]]
