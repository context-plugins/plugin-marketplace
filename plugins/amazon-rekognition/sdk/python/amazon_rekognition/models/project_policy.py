from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ProjectPolicy(SdkBaseModel):
    project_arn: Optional[str] = Field(default=UNSET, alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project to which the project policy is attached."""

    policy_name: Optional[str] = Field(default=UNSET, alias="PolicyName")
    """The name of the project policy."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID of the project policy."""

    policy_document: Optional[str] = Field(default=UNSET, alias="PolicyDocument")
    """The JSON document for the project policy."""

    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The Unix datetime for the creation of the project policy."""

    last_updated_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdatedTimestamp")
    """The Unix datetime for when the project policy was last updated."""


class ProjectPolicyDict(TypedDict):
    project_arn: NotRequired[str]
    policy_name: NotRequired[str]
    policy_revision_id: NotRequired[str]
    policy_document: NotRequired[str]
    creation_timestamp: NotRequired[RFC3339DateTime]
    last_updated_timestamp: NotRequired[RFC3339DateTime]
