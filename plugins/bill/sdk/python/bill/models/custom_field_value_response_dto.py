from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomFieldValueResponseDto(SdkBaseModel):
    """DTO representing a custom field value response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the custom field value"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the custom field value"""

    value: Optional[str] = UNSET
    """Custom field value"""

    deleted: Optional[bool] = UNSET
    """Set as ``true`` if the custom field value is retired"""


class CustomFieldValueResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    value: NotRequired[str]
    deleted: NotRequired[bool]
