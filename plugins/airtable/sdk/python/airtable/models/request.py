from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .record1 import Record1, Record1Dict


class Request(SdkBaseModel):
    records: list[Record1]
    typecast: Optional[bool] = UNSET
    """If true, the API will attempt to convert string values to the appropriate cell value type."""

    return_fields_by_field_id: Optional[bool] = Field(default=UNSET, alias="returnFieldsByFieldId")
    """If true, the response will use field IDs as keys instead of field names."""


class RequestDict(TypedDict):
    records: list[Record1Dict]
    typecast: NotRequired[bool]
    return_fields_by_field_id: NotRequired[bool]
