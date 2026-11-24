from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.database_dump_type1 import DatabaseDumpType1OrStr


class ExportMetadataRequest(SdkBaseModel):
    """Request message for DataprocMetastore.ExportMetadata."""

    database_dump_type: Optional[DatabaseDumpType1OrStr] = Field(default=UNSET, alias="databaseDumpType")
    """Optional. The type of the database dump. If unspecified, defaults to MYSQL."""

    destination_gcs_folder: Optional[str] = Field(default=UNSET, alias="destinationGcsFolder")
    """A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created
    below it."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has
    completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes
    after the first request.For example, if an initial request times out, followed by another request with the same
    request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID
    must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID
    (00000000-0000-0000-0000-000000000000) is not supported."""


class ExportMetadataRequestDict(TypedDict):
    database_dump_type: NotRequired[DatabaseDumpType1OrStr]
    destination_gcs_folder: NotRequired[str]
    request_id: NotRequired[str]
