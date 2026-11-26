from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_value_dto import CustomFieldValueDto, CustomFieldValueDtoDict


class CustomFieldDto(SdkBaseModel):
    """Transaction custom field response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the custom field"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the custom field"""

    name: Optional[str] = UNSET
    """Custom field name"""

    note: Optional[str] = UNSET
    """Custom field note"""

    is_required: Optional[bool] = Field(default=UNSET, alias="isRequired")
    """Set as ``true`` if the custom field is required"""

    selected_values: Optional[list[CustomFieldValueDto]] = Field(default=UNSET, alias="selectedValues")
    """List of selected values for this custom field.

    **NOTE**: In the response, you get up to 20 selected values for a custom field. Use ``GET
    /v3/spend/custom-fields/{customFieldId}/values`` to get the complete list of selected values."""


class CustomFieldDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    note: NotRequired[str]
    is_required: NotRequired[bool]
    selected_values: NotRequired[list[CustomFieldValueDtoDict]]
