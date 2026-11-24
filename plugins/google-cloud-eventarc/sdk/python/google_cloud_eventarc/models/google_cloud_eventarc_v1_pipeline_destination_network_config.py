from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineDestinationNetworkConfig(SdkBaseModel):
    """Represents a network config to be used for destination resolution and connectivity."""

    network_attachment: Optional[str] = Field(default=UNSET, alias="networkAttachment")
    """Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format:
    ``projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}``"""


class GoogleCloudEventarcV1PipelineDestinationNetworkConfigDict(TypedDict):
    network_attachment: NotRequired[str]
