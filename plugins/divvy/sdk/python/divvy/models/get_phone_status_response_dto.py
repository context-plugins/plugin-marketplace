from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetPhoneStatusResponseDto(SdkBaseModel):
    """Get phone status response."""

    has_phone: Optional[bool] = Field(default=UNSET, alias="hasPhone")
    """Set as ``true`` if the user has an existing phone number for risk verification"""


class GetPhoneStatusResponseDtoDict(TypedDict):
    has_phone: NotRequired[bool]
