from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enum_schema import EnumSchema, EnumSchemaDict
from .enums.schema_type import SchemaTypeOrStr


class PropertySchema(SdkBaseModel):
    schema_type: Optional[SchemaTypeOrStr] = Field(default=UNSET, alias="schemaType")
    required: Optional[bool] = UNSET
    enum_schema: Optional[EnumSchema] = Field(default=UNSET, alias="enumSchema")


class PropertySchemaDict(TypedDict):
    schema_type: NotRequired[SchemaTypeOrStr]
    required: NotRequired[bool]
    enum_schema: NotRequired[EnumSchemaDict]
