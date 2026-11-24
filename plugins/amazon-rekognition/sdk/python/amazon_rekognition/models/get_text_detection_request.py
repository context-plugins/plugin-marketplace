from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetTextDetectionRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Job identifier for the text detection operation for which you want results returned. You get the job identifer
    from an initial call to StartTextDetection."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video
    returns a pagination token in the response. You can use this pagination token to retrieve the next set of text."""


class GetTextDetectionRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
