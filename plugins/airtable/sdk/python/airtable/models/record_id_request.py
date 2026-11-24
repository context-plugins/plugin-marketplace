from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecordIdRequest(SdkBaseModel):
    fields: Any
    """A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure
    depends on the field types defined in the table schema."""

    typecast: Optional[bool] = UNSET
    """If true, the API will attempt to convert string values to the appropriate cell value type."""

    return_fields_by_field_id: Optional[bool] = Field(default=UNSET, alias="returnFieldsByFieldId")


class RecordIdRequestDict(TypedDict):
    fields: Any
    typecast: NotRequired[bool]
    return_fields_by_field_id: NotRequired[bool]
