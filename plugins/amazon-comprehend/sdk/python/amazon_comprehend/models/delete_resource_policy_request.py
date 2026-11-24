from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the custom model version that has the policy to delete."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID of the policy to delete."""


class DeleteResourcePolicyRequestDict(TypedDict):
    resource_arn: str
    policy_revision_id: NotRequired[str]
