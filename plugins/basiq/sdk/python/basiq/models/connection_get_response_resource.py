from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .accounts import Accounts, AccountsDict
from .connection_institution import ConnectionInstitution, ConnectionInstitutionDict
from .enums.status2 import Status2OrStr
from .get_connection_links import GetConnectionLinks, GetConnectionLinksDict
from .profile import Profile, ProfileDict


class ConnectionGetResponseResource(SdkBaseModel):
    """Object containing details for connection post."""

    type_: str = Field(alias="type")
    """Type, always "connection"."""

    id: str
    """A string that uniquely identifies the user connection."""

    method: str
    """A string that uniquely identifies the user connections either it is web or openbanking"""

    created_date: str = Field(alias="createdDate")
    """Created date of the connection, available only for SERVER_SCOPE."""

    expiry_date: str = Field(alias="expiryDate")
    """Expiry date of the connection.This date is only set for open-banking connections.

    For web connections, the expiry date field will be empty."""

    last_used: Optional[str] = Field(default=UNSET, alias="lastUsed")
    """UTC Date and Time of when the connection was last used, in RFC 3339 format, available only for SERVER_SCOPE."""

    accounts: Optional[Accounts] = UNSET
    institution: ConnectionInstitution
    """Institution details."""

    profile: Optional[Profile] = UNSET
    status: Optional[Status2OrStr] = UNSET
    """Indicates the connection status, available only for SERVER_SCOPE."""

    links: GetConnectionLinks
    """Object containing links to resources."""


class ConnectionGetResponseResourceDict(TypedDict):
    type_: str
    id: str
    method: str
    created_date: str
    expiry_date: str
    last_used: NotRequired[str]
    accounts: NotRequired[AccountsDict]
    institution: ConnectionInstitutionDict
    profile: NotRequired[ProfileDict]
    status: NotRequired[Status2OrStr]
    links: GetConnectionLinksDict
