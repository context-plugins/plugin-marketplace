from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomFieldValue(SdkBaseModel):
    """Custom field value object representing the custom field value return on Custom fields for transactions and
    reimbursements."""

    uuid: str
    value: str


class CustomFieldValueDict(TypedDict):
    uuid: str
    value: str
