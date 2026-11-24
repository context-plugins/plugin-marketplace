from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application import Application, ApplicationDict


class AppInventoryListResponse(SdkBaseModel):
    """Response containing application inventory entries"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of application inventory entries"""

    applications: Optional[list[Application]] = UNSET


class AppInventoryListResponseDict(TypedDict):
    total_count: NotRequired[int]
    applications: NotRequired[list[ApplicationDict]]
