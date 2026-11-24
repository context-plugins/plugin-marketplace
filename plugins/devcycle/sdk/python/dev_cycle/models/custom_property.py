from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type2 import Type2OrStr
from .property_schema import PropertySchema, PropertySchemaDict


class CustomProperty(SdkBaseModel):
    name: str
    """Display name for Custom Property."""

    key: str
    """Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD operations. Must only
    contain lower-case characters and ``_``, ``-`` or ``.``."""

    id: str = Field(alias="_id")
    """A unique CustomProperty ID"""

    project: str = Field(alias="_project")
    """The Project owning the Custom Property"""

    created_by: str = Field(alias="_createdBy")
    """ID of the User who created the project"""

    property_key: str = Field(alias="propertyKey")
    """Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the Custom Property.."""

    type_: Type2OrStr = Field(alias="type")
    """The Custom Property type"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Project was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Project was last updated"""

    schema_value: Optional[PropertySchema] = Field(default=UNSET, alias="schema")
    """Schema definition for the custom property."""

    has_usage: Optional[bool] = Field(default=UNSET, alias="hasUsage")
    """Whether the custom property is in use by a feature"""


class CustomPropertyDict(TypedDict):
    name: str
    key: str
    id: str
    project: str
    created_by: str
    property_key: str
    type_: Type2OrStr
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    schema_value: NotRequired[PropertySchemaDict]
    has_usage: NotRequired[bool]
