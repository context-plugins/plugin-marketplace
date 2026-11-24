from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.effect import EffectOrStr
from .principal import Principal, PrincipalDict


class CreateResourcePolicyStatementRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""

    statement_id: str = Field(alias="statementId")
    """The name of the statement. The ID is the same as the Sid IAM property. The statement name must be unique within
    the policy. For more information, see IAM JSON policy elements: Sid."""

    effect: EffectOrStr
    """Determines whether the statement allows or denies access to the resource."""

    principal: list[Principal]
    """An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is allowed or denied access
    to a resource. For more information, see Amazon Web Services JSON policy elements: Principal."""

    action: list[str]
    """The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the
    specified ARN. For more information, see Actions, resources, and condition keys for Amazon Lex V2."""

    condition: Optional[dict[str, str]] = UNSET
    """Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you
    must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global
    condition key. For more information, see IAM JSON policy elements: Condition ."""

    expected_revision_id: Optional[str] = Field(default=UNSET, alias="expectedRevisionId")
    """The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID,
    Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy
    with the new values."""


class CreateResourcePolicyStatementRequestDict(TypedDict):
    resource_arn: str
    statement_id: str
    effect: EffectOrStr
    principal: list[PrincipalDict]
    action: list[str]
    condition: NotRequired[dict[str, str]]
    expected_revision_id: NotRequired[str]
