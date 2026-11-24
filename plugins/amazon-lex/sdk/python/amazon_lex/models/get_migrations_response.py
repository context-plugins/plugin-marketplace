from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .migration_summary import MigrationSummary, MigrationSummaryDict


class GetMigrationsResponse(SdkBaseModel):
    migration_summaries: Optional[list[MigrationSummary]] = Field(default=UNSET, alias="migrationSummaries")
    """An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the migration, use
    the migrationId from the summary in a call to the operation."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response is truncated, it includes a pagination token that you can specify in your next request to fetch
    the next page of migrations."""


class GetMigrationsResponseDict(TypedDict):
    migration_summaries: NotRequired[list[MigrationSummaryDict]]
    next_token: NotRequired[str]
