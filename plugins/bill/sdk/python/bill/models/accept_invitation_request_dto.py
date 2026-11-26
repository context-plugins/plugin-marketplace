from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.accept_invite_type import AcceptInviteTypeOrStr


class AcceptInvitationRequestDto(SdkBaseModel):
    """Accept network invitation"""

    network_id: str = Field(alias="networkId")
    """Payment Network ID (PNI) of the customer or vendor that sent the invitation. BILL uses the PNI to send and
    receive electronic payments."""

    type_: AcceptInviteTypeOrStr = Field(alias="type")
    id: OptionalNullable[str] = UNSET
    """BILL-generated ID of the existing vendor or customer record in your organization that you want to connect with.
    The value begins with ``009`` (vendor) or ``0cu`` (customer).

    When you set this field, you cannot set ``name`` in your request."""

    name: OptionalNullable[str] = UNSET
    """Name of the new vendor or customer record that you want to add in your organization. BILL creates a new record
    with this name.

    When you set this field, you cannot set ``id`` in your request."""


class AcceptInvitationRequestDtoDict(TypedDict):
    network_id: str
    type_: AcceptInviteTypeOrStr
    id: NotRequired[str | None]
    name: NotRequired[str | None]
