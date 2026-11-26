from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.void_type_request import VoidTypeRequestOrStr


class VoidRequestDto(SdkBaseModel):
    """Request to Void a Payment."""

    type_: VoidTypeRequestOrStr = Field(alias="type")
    reason: str
    """Void payment request reason"""


class VoidRequestDtoDict(TypedDict):
    type_: VoidTypeRequestOrStr
    reason: str
