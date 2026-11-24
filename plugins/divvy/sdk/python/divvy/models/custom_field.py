from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_field_value import CustomFieldValue, CustomFieldValueDict


class CustomField(SdkBaseModel):
    """Custom field object used for custom field return values. Used on Transaction and Reimbursement returns"""

    uuid: str
    name: str
    note: str
    selected_values: list[CustomFieldValue] = Field(alias="selectedValues")


class CustomFieldDict(TypedDict):
    uuid: str
    name: str
    note: str
    selected_values: list[CustomFieldValueDict]
