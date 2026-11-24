from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregate_by import AggregateByOrStr
from .enums.sort_by_amazon_rekognition_content_moderation_api import SortByAmazonRekognitionContentModerationApiOrStr


class GetContentModerationRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier for the inappropriate, unwanted, or offensive content moderation job. Use JobId to identify the
    job in a subsequent call to GetContentModeration."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of content moderation
    labels."""

    sort_by: Optional[SortByAmazonRekognitionContentModerationApiOrStr] = Field(default=UNSET, alias="SortBy")
    """Sort to use for elements in the ModerationLabelDetections array. Use TIMESTAMP to sort array elements by the time
    labels are detected. Use NAME to alphabetically group elements for a label together. Within each label group, the
    array element are sorted by detection confidence. The default sort is by TIMESTAMP."""

    aggregate_by: Optional[AggregateByOrStr] = Field(default=UNSET, alias="AggregateBy")
    """Defines how to aggregate results of the StartContentModeration request. Default aggregation option is TIMESTAMPS.
    SEGMENTS mode aggregates moderation labels over time."""


class GetContentModerationRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortByAmazonRekognitionContentModerationApiOrStr]
    aggregate_by: NotRequired[AggregateByOrStr]
