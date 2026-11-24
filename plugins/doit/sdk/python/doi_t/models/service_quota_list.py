from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_quota import ServiceQuota, ServiceQuotaDict


class ServiceQuotaList(SdkBaseModel):
    items: list[ServiceQuota]
    """Service quotas in this page."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Opaque token for the next page. Omitted when there are no more results."""

    row_count: int = Field(alias="rowCount")
    """Total number of results after filtering and before pagination."""


class ServiceQuotaListDict(TypedDict):
    items: list[ServiceQuotaDict]
    page_token: NotRequired[str]
    row_count: int
