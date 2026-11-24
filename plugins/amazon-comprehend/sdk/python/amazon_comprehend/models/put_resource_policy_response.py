from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutResourcePolicyResponse(SdkBaseModel):
    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it
    deletes the prior version of the policy."""


class PutResourcePolicyResponseDict(TypedDict):
    policy_revision_id: NotRequired[str]
