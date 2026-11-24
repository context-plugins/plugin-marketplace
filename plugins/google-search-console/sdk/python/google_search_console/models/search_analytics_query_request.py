from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_dimension_filter_group import ApiDimensionFilterGroup, ApiDimensionFilterGroupDict
from .enums.aggregation_type import AggregationTypeOrStr
from .enums.data_state import DataStateOrStr
from .enums.dimension1 import Dimension1OrStr
from .enums.search_type import SearchTypeOrStr
from .enums.type import TypeOrStr


class SearchAnalyticsQueryRequest(SdkBaseModel):
    dimensions: Optional[list[Dimension1OrStr]] = UNSET
    """[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search
    Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order
    that you supply these dimensions."""

    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    """[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than
    or equal to the start date. This value is included in the range."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    r"""Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews."""

    aggregation_type: Optional[AggregationTypeOrStr] = Field(default=UNSET, alias="aggregationType")
    r"""[Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same
    property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by
    page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data
    calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:**
    If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the
    aggregation type in the result will match the requested type, or if you request an invalid type, you will get an
    error. The API will never change your aggregation type if the requested type is invalid."""

    data_state: Optional[DataStateOrStr] = Field(default=UNSET, alias="dataState")
    """The data state to be fetched, can be full or all, the latter including full and partial data."""

    start_row: Optional[int] = Field(default=UNSET, alias="startRow")
    """[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number."""

    search_type: Optional[SearchTypeOrStr] = Field(default=UNSET, alias="searchType")
    r"""[Optional; Default is \"web\"] The search type to filter for."""

    dimension_filter_groups: Optional[list[ApiDimensionFilterGroup]] = Field(
        default=UNSET, alias="dimensionFilterGroups"
    )
    r"""[Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"'
    to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a
    dimension without grouping by it."""

    row_limit: Optional[int] = Field(default=UNSET, alias="rowLimit")
    """[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000
    (inclusive)."""

    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    """[Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less
    than or equal to the end date. This value is included in the range."""


class SearchAnalyticsQueryRequestDict(TypedDict):
    dimensions: NotRequired[list[Dimension1OrStr]]
    end_date: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    aggregation_type: NotRequired[AggregationTypeOrStr]
    data_state: NotRequired[DataStateOrStr]
    start_row: NotRequired[int]
    search_type: NotRequired[SearchTypeOrStr]
    dimension_filter_groups: NotRequired[list[ApiDimensionFilterGroupDict]]
    row_limit: NotRequired[int]
    start_date: NotRequired[str]
