from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeProjectVersionsRequest(SdkBaseModel):
    project_arn: str = Field(alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project that contains the model/adapter you want to describe."""

    version_names: Optional[list[str]] = Field(default=UNSET, alias="VersionNames")
    """A list of model or project version names that you want to describe. You can add up to 10 model or project version
    names to the list. If you don't specify a value, all project version descriptions are returned. A version name is
    part of a project version ARN. For example, my-model.2020-01-21T09.10.15 is the version name in the following ARN.
    arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/my-model.2020-01-21T09.10.15/1234567890123."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return per paginated call. The largest value you can specify is 100. If you
    specify a value greater than 100, a ValidationException error occurs. The default value is 100."""


class DescribeProjectVersionsRequestDict(TypedDict):
    project_arn: str
    version_names: NotRequired[list[str]]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
