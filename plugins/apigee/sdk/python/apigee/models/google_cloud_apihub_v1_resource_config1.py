from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action_type import ActionTypeOrStr


class GoogleCloudApihubV1ResourceConfig1(SdkBaseModel):
    """Output only. The configuration of resources created for a given plugin instance action. Note these will be
    returned only in case of non-Google Cloud plugins like OPDK."""

    pubsub_topic: Optional[str] = Field(default=UNSET, alias="pubsubTopic")
    """Output only. The pubsub topic to publish the data to. Format is projects/{project}/topics/{topic}"""

    action_type: Optional[ActionTypeOrStr] = Field(default=UNSET, alias="actionType")
    """Output only. The type of the action."""


class GoogleCloudApihubV1ResourceConfig1Dict(TypedDict):
    pubsub_topic: NotRequired[str]
    action_type: NotRequired[ActionTypeOrStr]
