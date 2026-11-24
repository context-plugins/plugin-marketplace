from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attachment_state import AttachmentStateOrStr
from .enums.attachment_type import AttachmentTypeOrStr


class DirectConnectGatewayAttachment(SdkBaseModel):
    direct_connect_gateway_id: Optional[str] = Field(default=UNSET, alias="directConnectGatewayId")
    """The ID of the Direct Connect gateway."""

    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    virtual_interface_region: Optional[str] = Field(default=UNSET, alias="virtualInterfaceRegion")
    """The Amazon Web Services Region where the virtual interface is located."""

    virtual_interface_owner_account: Optional[str] = Field(default=UNSET, alias="virtualInterfaceOwnerAccount")
    """The ID of the Amazon Web Services account that owns the virtual interface."""

    attachment_state: Optional[AttachmentStateOrStr] = Field(default=UNSET, alias="attachmentState")
    """The state of the attachment. The following are the possible values: attaching: The initial state after a virtual
    interface is created using the Direct Connect gateway. attached: The Direct Connect gateway and virtual interface
    are attached and ready to pass traffic. detaching: The initial state after calling DeleteVirtualInterface. detached:
    The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway
    and virtual interface is stopped."""

    attachment_type: Optional[AttachmentTypeOrStr] = Field(default=UNSET, alias="attachmentType")
    """The type of attachment."""

    state_change_error: Optional[str] = Field(default=UNSET, alias="stateChangeError")
    """The error message if the state of an object failed to advance."""


class DirectConnectGatewayAttachmentDict(TypedDict):
    direct_connect_gateway_id: NotRequired[str]
    virtual_interface_id: NotRequired[str]
    virtual_interface_region: NotRequired[str]
    virtual_interface_owner_account: NotRequired[str]
    attachment_state: NotRequired[AttachmentStateOrStr]
    attachment_type: NotRequired[AttachmentTypeOrStr]
    state_change_error: NotRequired[str]
