from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DatasetSlimDto(SdkBaseModel):
    cloud_url: Optional[str] = Field(default=UNSET, alias="cloudUrl")
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    qualified_name: Optional[str] = Field(default=UNSET, alias="qualifiedName")


class DatasetSlimDtoDict(TypedDict):
    cloud_url: NotRequired[str]
    id: NotRequired[str]
    name: NotRequired[str]
    qualified_name: NotRequired[str]
