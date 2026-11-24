from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssociatedCoreNetwork(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the Cloud WAN core network that the Direct Connect gateway is associated to."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The account owner of the Cloud WAN core network."""

    attachment_id: Optional[str] = Field(default=UNSET, alias="attachmentId")
    """the ID of the Direct Connect gateway attachment."""


class AssociatedCoreNetworkDict(TypedDict):
    id: NotRequired[str]
    owner_account: NotRequired[str]
    attachment_id: NotRequired[str]
