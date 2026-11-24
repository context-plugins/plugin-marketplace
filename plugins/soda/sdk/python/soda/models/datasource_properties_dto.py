from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.model_version_dto import ModelVersionDtoOrStr


class DatasourcePropertiesDto(SdkBaseModel):
    label: Optional[str] = UNSET
    name: Optional[str] = UNSET
    prefix: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    version: Optional[ModelVersionDtoOrStr] = UNSET


class DatasourcePropertiesDtoDict(TypedDict):
    label: NotRequired[str]
    name: NotRequired[str]
    prefix: NotRequired[str]
    type_: NotRequired[str]
    version: NotRequired[ModelVersionDtoOrStr]
