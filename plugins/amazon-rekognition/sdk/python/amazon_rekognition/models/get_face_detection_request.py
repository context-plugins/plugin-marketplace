from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetFaceDetectionRequest(SdkBaseModel):
    job_id: str = Field(alias="JobId")
    """Unique identifier for the face detection job. The JobId is returned from StartFaceDetection."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify
    a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video
    returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces."""


class GetFaceDetectionRequestDict(TypedDict):
    job_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
