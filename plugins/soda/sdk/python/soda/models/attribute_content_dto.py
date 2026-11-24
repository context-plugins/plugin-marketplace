from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute_resource_type_dto import AttributeResourceTypeDtoOrStr
from .enums.attribute_type_dto import AttributeTypeDtoOrStr


class AttributeContentDto(SdkBaseModel):
    allowed_values: Optional[list[str]] = Field(default=UNSET, alias="allowedValues")
    description: Optional[str] = UNSET
    id: str
    label: str
    name: str
    resource_type: AttributeResourceTypeDtoOrStr = Field(alias="resourceType")
    type_: AttributeTypeDtoOrStr = Field(alias="type")


class AttributeContentDtoDict(TypedDict):
    allowed_values: NotRequired[list[str]]
    description: NotRequired[str]
    id: str
    label: str
    name: str
    resource_type: AttributeResourceTypeDtoOrStr
    type_: AttributeTypeDtoOrStr
