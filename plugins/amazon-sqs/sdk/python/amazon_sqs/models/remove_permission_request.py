from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RemovePermissionRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue from which permissions are removed. Queue URLs and names are case-sensitive."""

    label: str = Field(alias="Label")
    """The identification of the permission to remove. This is the label added using the AddPermission action."""


class RemovePermissionRequestDict(TypedDict):
    queue_url: str
    label: str
