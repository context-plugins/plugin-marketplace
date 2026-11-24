from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .api_key_status import ApiKeyStatus, ApiKeyStatusDict


class ApiLimitsDto(SdkBaseModel):
    """Current API usage and limits for the authenticated account, optionally including the status of additional API
    keys that were requested. Reading this does not count against the account's request quota or rate limit."""

    organization_name: OptionalNullable[str] = Field(default=UNSET, alias="organizationName")
    """Name of the account (organization) the API key belongs to."""

    requests_used: OptionalNullable[int] = Field(default=UNSET, alias="requestsUsed")
    """Number of billable requests used in the current tracking period."""

    request_limit: OptionalNullable[int] = Field(default=UNSET, alias="requestLimit")
    """Maximum number of requests allowed in the current tracking period. Null means the account has no request
    limit."""

    max_page_size: OptionalNullable[int] = Field(default=UNSET, alias="maxPageSize")
    """Maximum number of results allowed per page (page size)."""

    pagination_limit: OptionalNullable[int] = Field(default=UNSET, alias="paginationLimit")
    """Maximum number of results that can be paginated through."""

    article_content_truncation: OptionalNullable[int] = Field(default=UNSET, alias="articleContentTruncation")
    """Number of characters article content is truncated to. Null means content is not truncated."""

    since: OptionalNullable[RFC3339DateTime] = UNSET
    """Start of the current tracking period."""

    last_made_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastMadeAt")
    """Timestamp of the last billable request."""

    reset_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="resetAt")
    """When the request counter resets to zero."""

    subscription_cancel_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="subscriptionCancelAt")
    """Date the API subscription is scheduled to be cancelled. Absent when the subscription is not set to cancel."""

    key_statuses: OptionalNullable[list[ApiKeyStatus]] = Field(default=UNSET, alias="keyStatuses")
    """Status of each API key supplied via the 'apiKeys' parameter, in the same order as the request. Absent when no
    keys were supplied."""


class ApiLimitsDtoDict(TypedDict):
    organization_name: NotRequired[str | None]
    requests_used: NotRequired[int | None]
    request_limit: NotRequired[int | None]
    max_page_size: NotRequired[int | None]
    pagination_limit: NotRequired[int | None]
    article_content_truncation: NotRequired[int | None]
    since: NotRequired[RFC3339DateTime | None]
    last_made_at: NotRequired[RFC3339DateTime | None]
    reset_at: NotRequired[RFC3339DateTime | None]
    subscription_cancel_at: NotRequired[RFC3339DateTime | None]
    key_statuses: NotRequired[list[ApiKeyStatusDict] | None]
