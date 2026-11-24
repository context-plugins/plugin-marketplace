from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_version_description import ProjectVersionDescription, ProjectVersionDescriptionDict


class DescribeProjectVersionsResponse(SdkBaseModel):
    project_version_descriptions: Optional[list[ProjectVersionDescription]] = Field(
        default=UNSET, alias="ProjectVersionDescriptions"
    )
    """A list of project version descriptions. The list is sorted by the creation date and time of the project versions,
    latest to earliest."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of results."""


class DescribeProjectVersionsResponseDict(TypedDict):
    project_version_descriptions: NotRequired[list[ProjectVersionDescriptionDict]]
    next_token: NotRequired[str]
