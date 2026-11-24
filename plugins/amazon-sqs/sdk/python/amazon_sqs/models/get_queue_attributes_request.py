from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute_name import AttributeNameOrStr


class GetQueueAttributesRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue whose attribute information is retrieved. Queue URLs and names are
    case-sensitive."""

    attribute_names: Optional[list[AttributeNameOrStr]] = Field(default=UNSET, alias="AttributeNames")
    """A list of attributes for which to retrieve information. The AttributeNames parameter is optional, but if you
    don't specify values for this parameter, the request returns empty results. In the future, new attributes might be
    added. If you write code that calls this action, we recommend that you structure your code so that it can handle new
    attributes gracefully. The following attributes are supported: The ApproximateNumberOfMessagesDelayed,
    ApproximateNumberOfMessagesNotVisible, and ApproximateNumberOfMessages metrics may not achieve consistency until at
    least 1 minute after the producers stop"""


class GetQueueAttributesRequestDict(TypedDict):
    queue_url: str
    attribute_names: NotRequired[list[AttributeNameOrStr]]
