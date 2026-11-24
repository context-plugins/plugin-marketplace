from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service_id import ServiceId, ServiceIdDict


class TraceUser(SdkBaseModel):
    user_name: Optional[str] = Field(default=UNSET, alias="UserName")
    """The user's name."""

    service_ids: Optional[list[ServiceId]] = Field(default=UNSET, alias="ServiceIds")
    """Services that the user's request hit."""


class TraceUserDict(TypedDict):
    user_name: NotRequired[str]
    service_ids: NotRequired[list[ServiceIdDict]]
