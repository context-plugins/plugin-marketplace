from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by_amazon_rekognition_face_search_api import SortByAmazonRekognitionFaceSearchApiOrStr


class GetFaceSearchRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """The job identifer for the search request. You get the job identifier from an initial call to StartFaceSearch."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition
    Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    search results."""

    sort_by: Optional[SortByAmazonRekognitionFaceSearchApiOrStr] = Field(default=UNSET, alias="SortBy")
    """Sort to use for grouping faces in the response. Use TIMESTAMP to group faces by the time that they are
    recognized. Use INDEX to sort by recognized faces."""


class GetFaceSearchRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortByAmazonRekognitionFaceSearchApiOrStr]
