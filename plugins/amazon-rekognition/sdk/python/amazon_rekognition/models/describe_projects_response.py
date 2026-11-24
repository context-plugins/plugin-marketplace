from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_description import ProjectDescription, ProjectDescriptionDict


class DescribeProjectsResponse(SdkBaseModel):
    project_descriptions: Optional[list[ProjectDescription]] = Field(default=UNSET, alias="ProjectDescriptions")
    """A list of project descriptions. The list is sorted by the date and time the projects are created."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a
    pagination token in the response. You can use this pagination token to retrieve the next set of results."""


class DescribeProjectsResponseDict(TypedDict):
    project_descriptions: NotRequired[list[ProjectDescriptionDict]]
    next_token: NotRequired[str]
