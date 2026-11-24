from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AvailabilityZoneDetail(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of a corresponding Availability Zone."""


class AvailabilityZoneDetailDict(TypedDict):
    name: NotRequired[str]
