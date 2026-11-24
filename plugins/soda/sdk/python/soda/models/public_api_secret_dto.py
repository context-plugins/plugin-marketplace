from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PublicApiSecretDto(SdkBaseModel):
    created: Optional[RFC3339DateTime] = UNSET
    id: Optional[str] = UNSET
    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    name: Optional[str] = UNSET


class PublicApiSecretDtoDict(TypedDict):
    created: NotRequired[RFC3339DateTime]
    id: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
