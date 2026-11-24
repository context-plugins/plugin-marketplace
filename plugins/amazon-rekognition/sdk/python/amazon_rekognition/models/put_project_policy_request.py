from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutProjectPolicyRequest(SdkBaseModel):
    project_arn: str = Field(alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project that the project policy is attached to."""

    policy_name: str = Field(alias="PolicyName")
    """A name for the policy."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels generates
    and assigns a new PolicyRevisionId and then deletes the previous version of the policy."""

    policy_document: str = Field(alias="PolicyDocument")
    """A resource policy to add to the model. The policy is a JSON structure that contains one or more statements that
    define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy
    document, see IAM JSON policy reference."""


class PutProjectPolicyRequestDict(TypedDict):
    project_arn: str
    policy_name: str
    policy_revision_id: NotRequired[str]
    policy_document: str
