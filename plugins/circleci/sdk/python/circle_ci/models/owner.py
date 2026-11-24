from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Owner(SdkBaseModel):
    id: UUID
    """The owner ID"""

    type_: TypeOrStr = Field(alias="type")
    """The owner type"""


class OwnerDict(TypedDict):
    id: UUID
    type_: TypeOrStr
