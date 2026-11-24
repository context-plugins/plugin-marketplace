from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDatasetLabelsRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset that you want to use."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom
    Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return per paginated call. The largest value you can specify is 100. If you
    specify a value greater than 100, a ValidationException error occurs. The default value is 100."""


class ListDatasetLabelsRequestDict(TypedDict):
    dataset_arn: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
