from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection_institution import ConnectionInstitution, ConnectionInstitutionDict
from .enums.status_connections_api import StatusConnectionsApiOrStr
from .get_connections_links import GetConnectionsLinks, GetConnectionsLinksDict


class DatumConnectionsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type, always "connection"."""

    id: str
    """Connection identification."""

    method: str
    """method identification."""

    status: Optional[StatusConnectionsApiOrStr] = UNSET
    """Connection status, available only for SERVER_SCOPE."""

    created_date: str = Field(alias="createdDate")
    """Created date of the connection, available only for SERVER_SCOPE."""

    expiry_date: str = Field(alias="expiryDate")
    """Expiry date of the connection.This date is only set for open-banking connections.

    For web connections, the expiry date field will be empty."""

    last_used: Optional[str] = Field(default=UNSET, alias="lastUsed")
    """Connection last used date, available only for SERVER_SCOPE."""

    institution: ConnectionInstitution
    """Institution details."""

    links: GetConnectionsLinks
    """Object containing links to resources."""


class DatumConnectionsApiDict(TypedDict):
    type_: str
    id: str
    method: str
    status: NotRequired[StatusConnectionsApiOrStr]
    created_date: str
    expiry_date: str
    last_used: NotRequired[str]
    institution: ConnectionInstitutionDict
    links: GetConnectionsLinksDict
