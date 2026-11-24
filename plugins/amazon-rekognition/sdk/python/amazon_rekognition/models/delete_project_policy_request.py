from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteProjectPolicyRequest(SdkBaseModel):
    project_arn: str = Field(alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to."""

    policy_name: str = Field(alias="PolicyName")
    """The name of the policy that you want to delete."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The ID of the project policy revision that you want to delete."""


class DeleteProjectPolicyRequestDict(TypedDict):
    project_arn: str
    policy_name: str
    policy_revision_id: NotRequired[str]
