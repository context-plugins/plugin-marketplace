from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueryAudienceExportRequest(SdkBaseModel):
    """A request to list users in an audience export."""

    offset: Optional[str] = UNSET
    """Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does
    not specify offset; or equivalently, sets offset to 0; the first request returns the first ``limit`` of rows. The
    second request sets offset to the ``limit`` of the first request; the second request returns the second ``limit`` of
    rows. To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    limit: Optional[str] = UNSET
    """Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of
    250,000 rows per request, no matter how many you ask for. ``limit`` must be positive. The API can also return fewer
    rows than the requested ``limit``, if there aren't as many dimension values as the ``limit``. To learn more about
    this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""


class QueryAudienceExportRequestDict(TypedDict):
    offset: NotRequired[str]
    limit: NotRequired[str]
