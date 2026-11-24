from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteResourcePolicyStatementRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""

    statement_id: str = Field(alias="statementId")
    """The name of the statement (SID) to delete from the policy."""

    expected_revision_id: Optional[str] = Field(default=UNSET, alias="expectedRevisionId")
    """The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the
    current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex removes the current
    contents of the statement."""


class DeleteResourcePolicyStatementRequestDict(TypedDict):
    resource_arn: str
    statement_id: str
    expected_revision_id: NotRequired[str]
