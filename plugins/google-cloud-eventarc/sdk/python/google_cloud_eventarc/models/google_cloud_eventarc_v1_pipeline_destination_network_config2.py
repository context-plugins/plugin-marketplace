from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineDestinationNetworkConfig2(SdkBaseModel):
    """Optional. Network config is used to configure how Pipeline resolves and connects to a destination."""

    network_attachment: Optional[str] = Field(default=UNSET, alias="networkAttachment")
    """Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format:
    ``projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}``"""


class GoogleCloudEventarcV1PipelineDestinationNetworkConfig2Dict(TypedDict):
    network_attachment: NotRequired[str]
