from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class User(SdkBaseModel):
    id: UUID
    email: EmailStr


class UserDict(TypedDict):
    id: UUID
    email: EmailStr
