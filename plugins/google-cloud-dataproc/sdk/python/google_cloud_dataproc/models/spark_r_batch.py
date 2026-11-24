from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkRBatch(SdkBaseModel):
    """A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch
    workload."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    main_r_file_uri: Optional[str] = Field(default=UNSET, alias="mainRFileUri")
    """Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file."""

    args: Optional[list[str]] = UNSET
    """Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch
    properties, such as --conf, since a collision can occur that causes an incorrect batch submission."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor."""


class SparkRBatchDict(TypedDict):
    archive_uris: NotRequired[list[str]]
    main_r_file_uri: NotRequired[str]
    args: NotRequired[list[str]]
    file_uris: NotRequired[list[str]]
