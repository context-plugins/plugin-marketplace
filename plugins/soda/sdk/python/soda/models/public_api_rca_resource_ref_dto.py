from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rca_resource_type_dto import RcaResourceTypeDtoOrStr


class PublicApiRcaResourceRefDto(SdkBaseModel):
    id: str
    name: Optional[str] = UNSET
    type_: RcaResourceTypeDtoOrStr = Field(alias="type")
    url: Optional[str] = UNSET


class PublicApiRcaResourceRefDtoDict(TypedDict):
    id: str
    name: NotRequired[str]
    type_: RcaResourceTypeDtoOrStr
    url: NotRequired[str]
