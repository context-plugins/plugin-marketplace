from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetQueueUrlRequest(SdkBaseModel):
    queue_name: str = Field(alias="QueueName")
    """(Required) The name of the queue for which you want to fetch the URL. The name can be up to 80 characters long
    and can include alphanumeric characters, hyphens (-), and underscores (_). Queue URLs and names are
    case-sensitive."""

    queue_owner_aws_account_id: Optional[str] = Field(default=UNSET, alias="QueueOwnerAWSAccountId")
    """(Optional) The Amazon Web Services account ID of the account that created the queue. This is only required when
    you are attempting to access a queue owned by another Amazon Web Services account."""


class GetQueueUrlRequestDict(TypedDict):
    queue_name: str
    queue_owner_aws_account_id: NotRequired[str]
