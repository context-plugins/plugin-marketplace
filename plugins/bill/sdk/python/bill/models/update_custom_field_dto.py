from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateCustomFieldDto(SdkBaseModel):
    r"""Set custom fields in transactions \& reimbursements."""

    custom_field_id: str = Field(alias="customFieldId")
    """BILL-generated ID or UUID of the custom field"""

    selected_values: Optional[list[str]] = Field(default=UNSET, alias="selectedValues")
    """List of selected custom field values. Set the custom field value ID or UUID values.

    **Note**: Clear the ``selectedValues`` array to clear all the custom field selected values."""

    note: Optional[str] = UNSET
    """Updated custom field note.

    **Note**: This field is available only for custom fields with ``type`` set as ``NOTE``."""


class UpdateCustomFieldDtoDict(TypedDict):
    custom_field_id: str
    selected_values: NotRequired[list[str]]
    note: NotRequired[str]
