from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by import SortByOrStr


class GetCelebrityRecognitionRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Job identifier for the required celebrity recognition analysis. You can get the job identifer from a call to
    StartCelebrityRecognition."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon
    Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next
    set of celebrities."""

    sort_by: Optional[SortByOrStr] = Field(default=UNSET, alias="SortBy")
    """Sort to use for celebrities returned in Celebrities field. Specify ID to sort by the celebrity identifier,
    specify TIMESTAMP to sort by the time the celebrity was recognized."""


class GetCelebrityRecognitionRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortByOrStr]
