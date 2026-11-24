from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UboResponseData(SdkBaseModel):
    email: Optional[EmailStr] = UNSET
    """The UBO email"""

    ubo_id: Optional[UUID] = Field(default=UNSET, alias="uboId")
    """A unique ID for the UBO"""


class UboResponseDataDict(TypedDict):
    email: NotRequired[EmailStr]
    ubo_id: NotRequired[UUID]
