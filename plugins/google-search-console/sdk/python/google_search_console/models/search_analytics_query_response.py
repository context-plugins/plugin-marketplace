from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_data_row import ApiDataRow, ApiDataRowDict
from .enums.response_aggregation_type import ResponseAggregationTypeOrStr
from .metadata1 import Metadata1, Metadata1Dict


class SearchAnalyticsQueryResponse(SdkBaseModel):
    """A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that
    key either by page or property, as specified by the aggregation type parameter."""

    response_aggregation_type: Optional[ResponseAggregationTypeOrStr] = Field(
        default=UNSET, alias="responseAggregationType"
    )
    """How the results were aggregated."""

    metadata: Optional[Metadata1] = UNSET
    """An object that may be returned with your query results, providing context about the state of the data. See
    details in Metadata object documentation."""

    rows: Optional[list[ApiDataRow]] = UNSET
    """A list of rows grouped by the key values in the order given in the query."""


class SearchAnalyticsQueryResponseDict(TypedDict):
    response_aggregation_type: NotRequired[ResponseAggregationTypeOrStr]
    metadata: NotRequired[Metadata1Dict]
    rows: NotRequired[list[ApiDataRowDict]]
