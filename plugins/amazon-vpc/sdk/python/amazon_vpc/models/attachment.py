from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class Attachment(SdkBaseModel):
    state: Optional[StateOrStr] = UNSET
    """The current state of the attachment"""

    vpc_id: Optional[str] = Field(default=UNSET, alias="vpcId")
    """The ID of the VPC"""


class AttachmentDict(TypedDict):
    state: NotRequired[StateOrStr]
    vpc_id: NotRequired[str]
