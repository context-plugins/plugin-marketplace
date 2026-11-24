from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Value(SdkBaseModel):
    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    name: Optional[str] = UNSET


class ValueDict(TypedDict):
    country_code: NotRequired[str]
    name: NotRequired[str]
