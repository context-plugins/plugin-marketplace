from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Destination(SdkBaseModel):
    """Where the act lands. Deliverd decides whether it is inside the organisation; only a workspace, report, user,
    group or an address at one of the organisation's own domains is internal"""

    type_: str = Field(alias="type")
    """workspace, report, user, group, email, url, channel, repository, …"""

    id: str
    """A workspace slug or id, an email address, a URL, a channel id"""

    label: Optional[str] = UNSET


class DestinationDict(TypedDict):
    type_: str
    id: str
    label: NotRequired[str]
