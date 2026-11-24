from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1NumbersResponse3(SdkBaseModel):
    id: Optional[str] = UNSET
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Plus sign followed by 7–15 digits."""

    released: Optional[bool] = UNSET
    restorable: Optional[bool] = UNSET


class ApiV1NumbersResponse3Dict(TypedDict):
    id: NotRequired[str]
    phone_number: NotRequired[str]
    released: NotRequired[bool]
    restorable: NotRequired[bool]
