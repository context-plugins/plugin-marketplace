from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User(SdkBaseModel):
    id: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    name: Optional[str] = UNSET


class UserDict(TypedDict):
    id: NotRequired[str]
    email: NotRequired[EmailStr]
    name: NotRequired[str]
