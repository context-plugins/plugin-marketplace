from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .migration_execution import MigrationExecution, MigrationExecutionDict


class ListMigrationExecutionsResponse(SdkBaseModel):
    """Response message for DataprocMetastore.ListMigrationExecutions."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    migration_executions: Optional[list[MigrationExecution]] = Field(default=UNSET, alias="migrationExecutions")
    """The migration executions on the specified service."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListMigrationExecutionsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    migration_executions: NotRequired[list[MigrationExecutionDict]]
    next_page_token: NotRequired[str]
