from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1WholesaleNumbersRequest(SdkBaseModel):
    area_id: str = Field(alias="areaId")
    """From ``/wholesale/areas``"""

    deliver_to: str = Field(alias="deliverTo")
    """Host, ``{number}`` template, or full sip URI (public hosts only)."""

    friendly_name: Optional[str] = Field(default=UNSET, alias="friendlyName")
    country_id: Optional[str] = Field(default=UNSET, alias="countryId")
    """Pass when ordering outside the US."""


class ApiV1WholesaleNumbersRequestDict(TypedDict):
    area_id: str
    deliver_to: str
    friendly_name: NotRequired[str]
    country_id: NotRequired[str]
