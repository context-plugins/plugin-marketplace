from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServiceRequest(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    intent: Optional[str] = UNSET
    code: Optional[Any] = UNSET
    subject: Optional[Any] = UNSET
    requester: Optional[Any] = UNSET
    performer: Optional[list[Any]] = UNSET


class ServiceRequestDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    status: NotRequired[str]
    intent: NotRequired[str]
    code: NotRequired[Any]
    subject: NotRequired[Any]
    requester: NotRequired[Any]
    performer: NotRequired[list[Any]]
