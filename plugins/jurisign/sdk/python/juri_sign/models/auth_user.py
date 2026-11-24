from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .organization import Organization, OrganizationDict


class AuthUser(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    role: Optional[str] = UNSET
    organization: Optional[Organization] = UNSET


class AuthUserDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    role: NotRequired[str]
    organization: NotRequired[OrganizationDict]
