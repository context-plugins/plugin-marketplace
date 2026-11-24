from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListStreamProcessorsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there are more stream processors to retrieve), Amazon
    Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next
    set of stream processors."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is
    1000."""


class ListStreamProcessorsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
