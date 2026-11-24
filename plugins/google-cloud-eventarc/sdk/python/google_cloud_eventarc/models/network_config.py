from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NetworkConfig(SdkBaseModel):
    """Network Configuration that can be inherited by other protos."""

    network_attachment: Optional[str] = Field(default=UNSET, alias="networkAttachment")
    """Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format:
    ``projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}``"""


class NetworkConfigDict(TypedDict):
    network_attachment: NotRequired[str]
