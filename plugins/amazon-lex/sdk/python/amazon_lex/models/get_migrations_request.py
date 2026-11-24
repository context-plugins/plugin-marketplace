from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.migration_status_equals import MigrationStatusEqualsOrStr
from .enums.sort_by_attribute import SortByAttributeOrStr
from .enums.sort_by_order import SortByOrderOrStr


class GetMigrationsRequest(SdkBaseModel):
    sort_by_attribute: Optional[SortByAttributeOrStr] = Field(default=UNSET, alias="sortByAttribute")
    """The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that
    the migration was started."""

    sort_by_order: Optional[SortByOrderOrStr] = Field(default=UNSET, alias="sortByOrder")
    """The order so sort the list."""

    v1_bot_name_contains: Optional[str] = Field(default=UNSET, alias="v1BotNameContains")
    """Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in
    bot name."""

    migration_status_equals: Optional[MigrationStatusEqualsOrStr] = Field(default=UNSET, alias="migrationStatusEquals")
    """Filters the list to contain only migrations in the specified state."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of migrations to return in the response. The default is 10."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of migrations. If the response to this operation is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination
    token in the request."""


class GetMigrationsRequestDict(TypedDict):
    sort_by_attribute: NotRequired[SortByAttributeOrStr]
    sort_by_order: NotRequired[SortByOrderOrStr]
    v1_bot_name_contains: NotRequired[str]
    migration_status_equals: NotRequired[MigrationStatusEqualsOrStr]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
