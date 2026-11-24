from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status2 import Status2OrStr


class Signer1JuriSignTemplatesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    status: Optional[Status2OrStr] = UNSET


class Signer1JuriSignTemplatesApiDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    status: NotRequired[Status2OrStr]
