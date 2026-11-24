from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .conversation import Conversation, ConversationDict
from .conversation_message import ConversationMessage, ConversationMessageDict
from .enums.platform import PlatformOrStr
from .enums.status31 import Status31OrStr
from .error import Error, ErrorDict
from .fetched_comment import FetchedComment, FetchedCommentDict
from .flow import Flow, FlowDict
from .flow_version import FlowVersion, FlowVersionDict
from .input import Input, InputDict
from .social_account import SocialAccount, SocialAccountDict
from .step32 import Step32, Step32Dict


class Item2BundleSocialAutomationApi(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    flow_id: str = Field(alias="flowId")
    flow_version_id: str = Field(alias="flowVersionId")
    trigger_id: OptionalNullable[str] = Field(default=UNSET, alias="triggerId")
    platform: PlatformOrStr
    social_account_id: str = Field(alias="socialAccountId")
    conversation_id: OptionalNullable[str] = Field(default=UNSET, alias="conversationId")
    conversation_message_id: OptionalNullable[str] = Field(default=UNSET, alias="conversationMessageId")
    fetched_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="fetchedCommentId")
    sender_external_id: OptionalNullable[str] = Field(default=UNSET, alias="senderExternalId")
    current_step_id: OptionalNullable[str] = Field(default=UNSET, alias="currentStepId")
    status: Status31OrStr
    idempotency_key: str = Field(alias="idempotencyKey")
    input: Optional[Input] = UNSET
    output: Optional[dict[str, Any]] = UNSET
    error: OptionalNullable[Error] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    flow: Optional[Flow] = UNSET
    flow_version: Optional[FlowVersion] = Field(default=UNSET, alias="flowVersion")
    steps: Optional[list[Step32]] = UNSET
    conversation: OptionalNullable[Conversation] = UNSET
    conversation_message: OptionalNullable[ConversationMessage] = Field(default=UNSET, alias="conversationMessage")
    fetched_comment: OptionalNullable[FetchedComment] = Field(default=UNSET, alias="fetchedComment")
    social_account: Optional[SocialAccount] = Field(default=UNSET, alias="socialAccount")


class Item2BundleSocialAutomationApiDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    flow_id: str
    flow_version_id: str
    trigger_id: NotRequired[str | None]
    platform: PlatformOrStr
    social_account_id: str
    conversation_id: NotRequired[str | None]
    conversation_message_id: NotRequired[str | None]
    fetched_comment_id: NotRequired[str | None]
    sender_external_id: NotRequired[str | None]
    current_step_id: NotRequired[str | None]
    status: Status31OrStr
    idempotency_key: str
    input: NotRequired[InputDict]
    output: NotRequired[dict[str, Any]]
    error: NotRequired[ErrorDict | None]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    flow: NotRequired[FlowDict]
    flow_version: NotRequired[FlowVersionDict]
    steps: NotRequired[list[Step32Dict]]
    conversation: NotRequired[ConversationDict | None]
    conversation_message: NotRequired[ConversationMessageDict | None]
    fetched_comment: NotRequired[FetchedCommentDict | None]
    social_account: NotRequired[SocialAccountDict]
