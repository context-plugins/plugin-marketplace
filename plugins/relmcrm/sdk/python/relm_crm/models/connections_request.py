from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConnectionsRequest(SdkBaseModel):
    channel: Optional[str] = UNSET
    provider: Optional[str] = UNSET
    api_key: str
    from_: Optional[str] = Field(default=UNSET, alias="from")
    name: Optional[str] = UNSET


class ConnectionsRequestDict(TypedDict):
    channel: NotRequired[str]
    provider: NotRequired[str]
    api_key: str
    from_: NotRequired[str]
    name: NotRequired[str]
