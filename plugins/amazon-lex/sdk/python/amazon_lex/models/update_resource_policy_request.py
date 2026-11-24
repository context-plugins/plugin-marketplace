from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""

    policy: str
    """A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements
    that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON
    policy document, see IAM JSON policy reference . If the policy isn't valid, Amazon Lex returns a validation
    exception."""

    expected_revision_id: Optional[str] = Field(default=UNSET, alias="expectedRevisionId")
    """The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision
    ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the
    policy with the new values."""


class UpdateResourcePolicyRequestDict(TypedDict):
    resource_arn: str
    policy: str
    expected_revision_id: NotRequired[str]
