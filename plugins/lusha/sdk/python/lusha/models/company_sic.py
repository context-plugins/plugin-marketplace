from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanySic(SdkBaseModel):
    sic_codes: Optional[float] = Field(default=UNSET, alias="sicCodes")
    description: str


class CompanySicDict(TypedDict):
    sic_codes: NotRequired[float]
    description: str
