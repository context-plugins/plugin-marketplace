from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links2_platform_payees_api import Links2PlatformPayeesApi, Links2PlatformPayeesApiDict
from .payee_summary import PayeeSummary, PayeeSummaryDict


class PayeesListResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always 'list'."""

    count: Optional[int] = UNSET
    """The total number of payees available."""

    size: Optional[int] = UNSET
    """The number of payees returned in this response."""

    data: list[PayeeSummary]
    """Array of payee objects."""

    links: Links2PlatformPayeesApi


class PayeesListResponseDict(TypedDict):
    type_: str
    count: NotRequired[int]
    size: NotRequired[int]
    data: list[PayeeSummaryDict]
    links: Links2PlatformPayeesApiDict
