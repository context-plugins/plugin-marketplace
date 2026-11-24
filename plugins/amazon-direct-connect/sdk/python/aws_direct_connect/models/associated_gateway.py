from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class AssociatedGateway(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the associated gateway."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """The type of associated gateway."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the associated virtual private gateway or transit gateway."""

    region: Optional[str] = UNSET
    """The Region where the associated gateway is located."""


class AssociatedGatewayDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    owner_account: NotRequired[str]
    region: NotRequired[str]
