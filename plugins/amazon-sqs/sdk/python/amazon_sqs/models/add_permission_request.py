from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AddPermissionRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue to which permissions are added. Queue URLs and names are case-sensitive."""

    label: str = Field(alias="Label")
    """The unique identification of the permission you're setting (for example, AliceSendMessage). Maximum 80
    characters. Allowed characters include alphanumeric characters, hyphens (-), and underscores (_)."""

    aws_account_ids: list[str] = Field(alias="AWSAccountIds")
    """The Amazon Web Services account numbers of the principals who are to receive permission. For information about
    locating the Amazon Web Services account identification, see Your Amazon Web Services Identifiers in the Amazon SQS
    Developer Guide."""

    actions: list[str] = Field(alias="Actions")
    """The action the client wants to allow for the specified principal. Valid values: the name of any action or *. For
    more information about these actions, see Overview of Managing Access Permissions to Your Amazon Simple Queue
    Service Resource in the Amazon SQS Developer Guide. Specifying SendMessage, DeleteMessage, or
    ChangeMessageVisibility for ActionName.n also grants permissions for the corresponding batch versions of those
    actions: SendMessageBatch, DeleteMessageBatch, and ChangeMessageVisibilityBatch."""


class AddPermissionRequestDict(TypedDict):
    queue_url: str
    label: str
    aws_account_ids: list[str]
    actions: list[str]
