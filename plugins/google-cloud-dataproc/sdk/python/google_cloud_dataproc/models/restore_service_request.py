from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.restore_type import RestoreTypeOrStr


class RestoreServiceRequest(SdkBaseModel):
    """Request message for DataprocMetastore.RestoreService."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has
    completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes
    after the first request.For example, if an initial request times out, followed by another request with the same
    request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID
    must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID
    (00000000-0000-0000-0000-000000000000) is not supported."""

    restore_type: Optional[RestoreTypeOrStr] = Field(default=UNSET, alias="restoreType")
    """Optional. The type of restore. If unspecified, defaults to METADATA_ONLY."""

    backup_location: Optional[str] = Field(default=UNSET, alias="backupLocation")
    """Optional. A Cloud Storage URI specifying the location of the backup artifacts, namely - backup avro files under
    "avro/", backup_metastore.json and service.json, in the following form:gs://. Mutually exclusive with backup, and
    exactly one of the two must be set."""

    backup: Optional[str] = UNSET
    """Optional. The relative resource name of the metastore service backup to restore from, in the following
    form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. Mutually exclusive
    with backup_location, and exactly one of the two must be set."""


class RestoreServiceRequestDict(TypedDict):
    request_id: NotRequired[str]
    restore_type: NotRequired[RestoreTypeOrStr]
    backup_location: NotRequired[str]
    backup: NotRequired[str]
