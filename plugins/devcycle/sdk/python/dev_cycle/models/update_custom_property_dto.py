from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_dev_cycle_management_custom_properties_api import TypeDevCycleManagementCustomPropertiesApiOrStr
from .property_schema import PropertySchema, PropertySchemaDict


class UpdateCustomPropertyDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Display name for Custom Property."""

    key: Optional[str] = UNSET
    """Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD operations. Must only
    contain lower-case characters and ``_``, ``-`` or ``.``."""

    property_key: Optional[str] = Field(default=UNSET, alias="propertyKey")
    """Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the Custom Property.."""

    type_: Optional[TypeDevCycleManagementCustomPropertiesApiOrStr] = Field(default=UNSET, alias="type")
    """Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String"
    """

    schema_value: Optional[PropertySchema] = Field(default=UNSET, alias="schema")
    """Schema definition for the custom property."""


class UpdateCustomPropertyDtoDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    property_key: NotRequired[str]
    type_: NotRequired[TypeDevCycleManagementCustomPropertiesApiOrStr]
    schema_value: NotRequired[PropertySchemaDict]
