from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .user_links import UserLinks, UserLinksDict


class User(SdkBaseModel):
    """All Of account, object, user."""

    links: Optional[UserLinks] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    display_name: Optional[str] = UNSET
    uuid: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    account_id: Optional[str] = UNSET
    """The user's Atlassian account ID."""

    account_status: Optional[str] = UNSET
    """The status of the account. Currently the only possible value is "active", but more values may be added in the
    future."""

    has_2fa_enabled: Optional[bool] = UNSET
    nickname: Optional[str] = UNSET
    """Account name defined by the owner. Should be used instead of the "username" field. Note that "nickname" cannot be
    used in place of "username" in URLs and queries, as "nickname" is not guaranteed to be unique."""

    is_staff: Optional[bool] = UNSET


class UserDict(TypedDict):
    links: NotRequired[UserLinksDict]
    created_on: NotRequired[RFC3339DateTime]
    display_name: NotRequired[str]
    uuid: NotRequired[str]
    type_: NotRequired[str]
    account_id: NotRequired[str]
    account_status: NotRequired[str]
    has_2fa_enabled: NotRequired[bool]
    nickname: NotRequired[str]
    is_staff: NotRequired[bool]
