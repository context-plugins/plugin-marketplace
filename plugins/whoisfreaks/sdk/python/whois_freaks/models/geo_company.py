from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeoCompany(SdkBaseModel):
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    domain: Optional[str] = UNSET


class GeoCompanyDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
    domain: NotRequired[str]
