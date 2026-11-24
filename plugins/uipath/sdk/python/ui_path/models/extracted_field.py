from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_value import FieldValue, FieldValueDict


class ExtractedField(SdkBaseModel):
    """A single extracted field with its value and confidence metadata"""

    field_id: Optional[str] = Field(default=UNSET, alias="FieldId")
    """Identifier of the extracted field as defined in the extractor schema"""

    field_name: Optional[str] = Field(default=UNSET, alias="FieldName")
    """Display name of the extracted field"""

    is_missing: Optional[bool] = Field(default=UNSET, alias="IsMissing")
    """Whether the field was not found in the document"""

    value: Optional[FieldValue] = Field(default=UNSET, alias="Value")
    """The extracted value with confidence and source reference"""


class ExtractedFieldDict(TypedDict):
    field_id: NotRequired[str]
    field_name: NotRequired[str]
    is_missing: NotRequired[bool]
    value: NotRequired[FieldValueDict]
