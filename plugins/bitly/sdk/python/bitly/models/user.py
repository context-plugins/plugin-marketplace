from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .email import Email, EmailDict


class User(SdkBaseModel):
    login: str
    name: str
    is_active: bool
    created: str
    modified: str
    is_sso_user: bool
    emails: list[Email]
    is_2fa_enabled: bool
    default_group_guid: Optional[str] = UNSET


class UserDict(TypedDict):
    login: str
    name: str
    is_active: bool
    created: str
    modified: str
    is_sso_user: bool
    emails: list[EmailDict]
    is_2fa_enabled: bool
    default_group_guid: NotRequired[str]
