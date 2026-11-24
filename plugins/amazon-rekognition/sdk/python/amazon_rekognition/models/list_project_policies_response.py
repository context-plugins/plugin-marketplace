from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .project_policy import ProjectPolicy, ProjectPolicyDict


class ListProjectPoliciesResponse(SdkBaseModel):
    project_policies: Optional[list[ProjectPolicy]] = Field(default=UNSET, alias="ProjectPolicies")
    """A list of project policies attached to the project."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to
    retrieve the next set of project policies."""


class ListProjectPoliciesResponseDict(TypedDict):
    project_policies: NotRequired[list[ProjectPolicyDict]]
    next_token: NotRequired[str]
