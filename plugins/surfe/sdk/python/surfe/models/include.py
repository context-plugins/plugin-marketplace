from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Include(SdkBaseModel):
    firmographics: Optional[bool] = UNSET
    phone_numbers: Optional[bool] = Field(default=UNSET, alias="phoneNumbers")


class IncludeDict(TypedDict):
    firmographics: NotRequired[bool]
    phone_numbers: NotRequired[bool]
