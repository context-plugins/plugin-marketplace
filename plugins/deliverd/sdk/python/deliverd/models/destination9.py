from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Destination9(SdkBaseModel):
    """Where it landed. Must be where it was authorised to"""

    type_: str = Field(alias="type")
    """workspace, report, user, group, email, url, channel, repository, …"""

    id: str
    """A workspace slug or id, an email address, a URL, a channel id"""

    label: Optional[str] = UNSET


class Destination9Dict(TypedDict):
    type_: str
    id: str
    label: NotRequired[str]
