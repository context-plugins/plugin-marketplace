from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkBatch(SdkBaseModel):
    """A configuration for running an Apache Spark (https://spark.apache.org/) batch workload."""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor."""

    main_class: Optional[str] = Field(default=UNSET, alias="mainClass")
    """Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or
    specified in jar_file_uris."""

    main_jar_file_uri: Optional[str] = Field(default=UNSET, alias="mainJarFileUri")
    """Optional. The HCFS URI of the jar file that contains the main class."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such
    as --conf, since a collision can occur that causes an incorrect batch submission."""


class SparkBatchDict(TypedDict):
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    file_uris: NotRequired[list[str]]
    main_class: NotRequired[str]
    main_jar_file_uri: NotRequired[str]
    args: NotRequired[list[str]]
