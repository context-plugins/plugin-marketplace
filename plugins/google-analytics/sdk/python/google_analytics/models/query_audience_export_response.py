from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience_export1 import AudienceExport1, AudienceExport1Dict
from .v1_beta_audience_row import V1BetaAudienceRow, V1BetaAudienceRowDict


class QueryAudienceExportResponse(SdkBaseModel):
    """A list of users in an audience export."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The total number of rows in the AudienceExport result. ``rowCount`` is independent of the number of rows returned
    in the response, the ``limit`` request parameter, and the ``offset`` request parameter. For example if a query
    returns 175 rows and includes ``limit`` of 50 in the API request, the response will contain ``rowCount`` of 175 but
    only 50 rows. To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    audience_export: Optional[AudienceExport1] = Field(default=UNSET, alias="audienceExport")
    """Configuration data about AudienceExport being queried. Returned to help interpret the audience rows in this
    response. For example, the dimensions in this AudienceExport correspond to the columns in the AudienceRows."""

    audience_rows: Optional[list[V1BetaAudienceRow]] = Field(default=UNSET, alias="audienceRows")
    """Rows for each user in an audience export. The number of rows in this response will be less than or equal to
    request's page size."""


class QueryAudienceExportResponseDict(TypedDict):
    row_count: NotRequired[int]
    audience_export: NotRequired[AudienceExport1Dict]
    audience_rows: NotRequired[list[V1BetaAudienceRowDict]]
