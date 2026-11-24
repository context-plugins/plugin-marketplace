from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action_type import ActionTypeOrStr


class GoogleCloudApihubV1ResourceConfig(SdkBaseModel):
    """The configuration of resources created for a given plugin instance action."""

    pubsub_topic: Optional[str] = Field(default=UNSET, alias="pubsubTopic")
    """Output only. The pubsub topic to publish the data to. Format is projects/{project}/topics/{topic}"""

    action_type: Optional[ActionTypeOrStr] = Field(default=UNSET, alias="actionType")
    """Output only. The type of the action."""


class GoogleCloudApihubV1ResourceConfigDict(TypedDict):
    pubsub_topic: NotRequired[str]
    action_type: NotRequired[ActionTypeOrStr]
