from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PySparkNotebookBatch1(SdkBaseModel):
    """Optional. PySpark notebook batch config."""

    file_uris: Optional[list[str]] = Field(default=UNSET, alias="fileUris")
    """Optional. HCFS URIs of files to be placed in the working directory of each executor"""

    jar_file_uris: Optional[list[str]] = Field(default=UNSET, alias="jarFileUris")
    """Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH."""

    archive_uris: Optional[list[str]] = Field(default=UNSET, alias="archiveUris")
    """Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file
    types: .jar, .tar, .tar.gz, .tgz, and .zip."""

    notebook_file_uri: Optional[str] = Field(default=UNSET, alias="notebookFileUri")
    """Required. The HCFS URI of the notebook file to execute."""

    python_file_uris: Optional[list[str]] = Field(default=UNSET, alias="pythonFileUris")
    """Optional. HCFS URIs of Python files to pass to the PySpark framework."""

    params: Optional[dict[str, str]] = UNSET
    """Optional. The parameters to pass to the notebook."""


class PySparkNotebookBatch1Dict(TypedDict):
    file_uris: NotRequired[list[str]]
    jar_file_uris: NotRequired[list[str]]
    archive_uris: NotRequired[list[str]]
    notebook_file_uri: NotRequired[str]
    python_file_uris: NotRequired[list[str]]
    params: NotRequired[dict[str, str]]
