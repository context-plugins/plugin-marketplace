from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class User(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    avatar_url: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class UserDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    avatar_url: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
