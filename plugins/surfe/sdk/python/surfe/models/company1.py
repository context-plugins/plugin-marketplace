from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Company1(SdkBaseModel):
    domain: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalID")


class Company1Dict(TypedDict):
    domain: NotRequired[str]
    external_id: NotRequired[str]
