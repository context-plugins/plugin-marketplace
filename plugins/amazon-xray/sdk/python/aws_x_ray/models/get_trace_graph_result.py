from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .service import Service, ServiceDict


class GetTraceGraphResult(SdkBaseModel):
    services: Optional[list[Service]] = Field(default=UNSET, alias="Services")
    """The services that have processed one of the specified requests."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetTraceGraphResultDict(TypedDict):
    services: NotRequired[list[ServiceDict]]
    next_token: NotRequired[str]
