from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict
from .tag_model import TagModel, TagModelDict


class InternetGateway(SdkBaseModel):
    """Describes an internet gateway"""

    internet_gateway_id: Optional[str] = Field(default=UNSET, alias="internetGatewayId")
    """The ID of the internet gateway"""

    attachments: Optional[list[Attachment]] = UNSET
    """Any VPCs attached to the internet gateway"""

    owner_id: Optional[str] = Field(default=UNSET, alias="ownerId")
    """The ID of the AWS account that owns the internet gateway"""

    tags: Optional[list[TagModel]] = UNSET
    """Any tags assigned to the internet gateway"""


class InternetGatewayDict(TypedDict):
    internet_gateway_id: NotRequired[str]
    attachments: NotRequired[list[AttachmentDict]]
    owner_id: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
