from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .migration_execution2 import MigrationExecution2, MigrationExecution2Dict


class StartMigrationRequest(SdkBaseModel):
    """Request message for DataprocMetastore.StartMigration."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has
    completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes
    after the first request.For example, if an initial request times out, followed by another request with the same
    request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID
    must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID
    (00000000-0000-0000-0000-000000000000) is not supported."""

    migration_execution: Optional[MigrationExecution2] = Field(default=UNSET, alias="migrationExecution")
    """Required. The configuration details for the migration."""

    migration_execution_id: Optional[str] = Field(default=UNSET, alias="migrationExecutionId")
    """Optional. The ID to use for the migration execution, which will become the final component of the migration
    execution's resource name. If not specified, a UUID will be generated.This value must be between 2 and 63 characters
    long inclusive, begin with a letter, end with a letter or number, and valid characters are a-z0-9-."""


class StartMigrationRequestDict(TypedDict):
    request_id: NotRequired[str]
    migration_execution: NotRequired[MigrationExecution2Dict]
    migration_execution_id: NotRequired[str]
