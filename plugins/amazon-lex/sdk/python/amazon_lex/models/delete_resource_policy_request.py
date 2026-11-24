from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached."""

    expected_revision_id: Optional[str] = Field(default=UNSET, alias="expectedRevisionId")
    """The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns
    an exception If you don't specify a revision ID, Amazon Lex will delete the current policy."""


class DeleteResourcePolicyRequestDict(TypedDict):
    resource_arn: str
    expected_revision_id: NotRequired[str]
