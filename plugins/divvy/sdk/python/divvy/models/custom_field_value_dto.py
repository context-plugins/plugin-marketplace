from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFieldValueDto(SdkBaseModel):
    """Custom field value DTO object representing the custom field value return on Custom fields for transactions and
    reimbursements."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the custom field value"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the custom field value"""

    value: Optional[str] = UNSET
    """Custom field value"""


class CustomFieldValueDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    value: NotRequired[str]
