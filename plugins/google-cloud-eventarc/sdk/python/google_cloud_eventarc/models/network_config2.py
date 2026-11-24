from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NetworkConfig2(SdkBaseModel):
    """Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should
    only be used with HttpEndpoint destination type."""

    network_attachment: Optional[str] = Field(default=UNSET, alias="networkAttachment")
    """Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format:
    ``projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}``"""


class NetworkConfig2Dict(TypedDict):
    network_attachment: NotRequired[str]
