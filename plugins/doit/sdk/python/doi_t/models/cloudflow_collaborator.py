from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role_doi_t_connections_api import RoleDoiTConnectionsApiOrStr


class CloudflowCollaborator(SdkBaseModel):
    email: Optional[EmailStr] = UNSET
    role: Optional[RoleDoiTConnectionsApiOrStr] = UNSET


class CloudflowCollaboratorDict(TypedDict):
    email: NotRequired[EmailStr]
    role: NotRequired[RoleDoiTConnectionsApiOrStr]
