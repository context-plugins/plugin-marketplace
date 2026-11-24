from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateResourcePolicyResponse(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy was attached to."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The current revision of the resource policy. Use the revision ID to make sure that you are updating the most
    current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a
    resource."""


class CreateResourcePolicyResponseDict(TypedDict):
    resource_arn: NotRequired[str]
    revision_id: NotRequired[str]
