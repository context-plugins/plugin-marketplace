from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by_amazon_rekognition_operations_api import SortByAmazonRekognitionOperationsApiOrStr


class GetPersonTrackingRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The identifier for a job that tracks persons in a video. You get the JobId from a call to StartPersonTracking."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video
    returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    persons."""

    sort_by: Optional[SortByAmazonRekognitionOperationsApiOrStr] = Field(default=UNSET, alias="SortBy")
    """Sort to use for elements in the Persons array. Use TIMESTAMP to sort array elements by the time persons are
    detected. Use INDEX to sort by the tracked persons. If you sort by INDEX, the array elements for each person are
    sorted by detection confidence. The default sort is by TIMESTAMP."""


class GetPersonTrackingRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortByAmazonRekognitionOperationsApiOrStr]
