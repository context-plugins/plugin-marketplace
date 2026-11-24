from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregate_by_amazon_rekognition_stored_video_analysis_api import (
    AggregateByAmazonRekognitionStoredVideoAnalysisApiOrStr,
)
from .enums.sort_by_amazon_rekognition_stored_video_analysis_api import (
    SortByAmazonRekognitionStoredVideoAnalysisApiOrStr,
)


class GetLabelDetectionRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Job identifier for the label detection operation for which you want results returned. You get the job identifer
    from an initial call to StartlabelDetection."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video
    returns a pagination token in the response. You can use this pagination token to retrieve the next set of labels."""

    sort_by: Optional[SortByAmazonRekognitionStoredVideoAnalysisApiOrStr] = Field(default=UNSET, alias="SortBy")
    """Sort to use for elements in the Labels array. Use TIMESTAMP to sort array elements by the time labels are
    detected. Use NAME to alphabetically group elements for a label together. Within each label group, the array element
    are sorted by detection confidence. The default sort is by TIMESTAMP."""

    aggregate_by: Optional[AggregateByAmazonRekognitionStoredVideoAnalysisApiOrStr] = Field(
        default=UNSET, alias="AggregateBy"
    )
    """Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments."""


class GetLabelDetectionRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortByAmazonRekognitionStoredVideoAnalysisApiOrStr]
    aggregate_by: NotRequired[AggregateByAmazonRekognitionStoredVideoAnalysisApiOrStr]
