from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_dev_cycle_management_custom_properties_api import TypeDevCycleManagementCustomPropertiesApiOrStr
from .property_schema import PropertySchema, PropertySchemaDict


class CreateCustomPropertyDto(SdkBaseModel):
    name: str
    """Display name for Custom Property."""

    key: str
    """Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD operations. Must only
    contain lower-case characters and ``_``, ``-`` or ``.``."""

    type_: TypeDevCycleManagementCustomPropertiesApiOrStr = Field(alias="type")
    """Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String"
    """

    property_key: str = Field(alias="propertyKey")
    """Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the Custom Property.."""

    schema_value: Optional[PropertySchema] = Field(default=UNSET, alias="schema")
    """Schema definition for the custom property."""


class CreateCustomPropertyDtoDict(TypedDict):
    name: str
    key: str
    type_: TypeDevCycleManagementCustomPropertiesApiOrStr
    property_key: str
    schema_value: NotRequired[PropertySchemaDict]
