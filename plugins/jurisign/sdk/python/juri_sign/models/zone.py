from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import Type, TypeOrStr


class Zone(SdkBaseModel):
    signer_index: int
    """Index in the signers array (0-based)"""

    page: int
    """Page number"""

    x: float
    """X position (% from left)"""

    y: float
    """Y position (% from top)"""

    width: float
    """Width (% of page)"""

    height: float
    """Height (% of page)"""

    type_: TypeOrStr = Field(default=Type.SIGNATURE, alias="type")
    """Field type. 'date' is always auto-filled at signing time, never editable by the signer."""

    label: Optional[str] = UNSET
    """Instruction shown to the signer. Required when type is 'text' or 'checkbox'."""

    required: bool = True
    """For 'text'/'checkbox' zones only: blocks signing until filled. Ignored for 'signature'/'date'."""


class ZoneDict(TypedDict):
    signer_index: int
    page: int
    x: float
    y: float
    width: float
    height: float
    type_: NotRequired[TypeOrStr]
    label: NotRequired[str]
    required: NotRequired[bool]
