from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .links import Links, LinksDict


class GpgAccountKey(SdkBaseModel):
    """All Of object, GPG_account_key."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    owner: Optional[Account] = UNSET
    key: Optional[str] = UNSET
    """The GPG key value in X format."""

    key_id: Optional[str] = UNSET
    """The unique identifier for the GPG key"""

    fingerprint: Optional[str] = UNSET
    """The GPG key fingerprint."""

    parent_fingerprint: Optional[str] = UNSET
    """The fingerprint of the parent key. This value is null unless the current key is a subkey."""

    comment: Optional[str] = UNSET
    """The comment parsed from the GPG key (if present)"""

    name: Optional[str] = UNSET
    """The user-defined label for the GPG key"""

    expires_on: Optional[RFC3339DateTime] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    added_on: Optional[RFC3339DateTime] = UNSET
    last_used: Optional[RFC3339DateTime] = UNSET
    subkeys: Optional[list[GpgAccountKey]] = UNSET
    links: Optional[Links] = UNSET


class GpgAccountKeyDict(TypedDict):
    type_: NotRequired[str]
    owner: NotRequired[AccountDict]
    key: NotRequired[str]
    key_id: NotRequired[str]
    fingerprint: NotRequired[str]
    parent_fingerprint: NotRequired[str]
    comment: NotRequired[str]
    name: NotRequired[str]
    expires_on: NotRequired[RFC3339DateTime]
    created_on: NotRequired[RFC3339DateTime]
    added_on: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    subkeys: NotRequired[list[GpgAccountKeyDict]]
    links: NotRequired[LinksDict]
