from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feature1 import Feature1OrStr


class DescribeProjectsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return per paginated call. The largest value you can specify is 100. If you
    specify a value greater than 100, a ValidationException error occurs. The default value is 100."""

    project_names: Optional[list[str]] = Field(default=UNSET, alias="ProjectNames")
    """A list of the projects that you want Rekognition to describe. If you don't specify a value, the response includes
    descriptions for all the projects in your AWS account."""

    features: Optional[list[Feature1OrStr]] = Field(default=UNSET, alias="Features")
    """Specifies the type of customization to filter projects by. If no value is specified, CUSTOM_LABELS is used as a
    default."""


class DescribeProjectsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    project_names: NotRequired[list[str]]
    features: NotRequired[list[Feature1OrStr]]
