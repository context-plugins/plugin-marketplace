from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.custom_field_data_type import CustomFieldDataType, CustomFieldDataTypeDict


class SubscriptionsPutRequestSubscriptionsItemCustomFieldsItem(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the existing custom field"""

    value: Optional[CustomFieldDataType] = UNSET
    """The value of the custom field"""

    delete: Optional[bool] = UNSET
    """A boolean value to specify whether to delete this custom field entry from the subscription"""


class SubscriptionsPutRequestSubscriptionsItemCustomFieldsItemDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[CustomFieldDataTypeDict]
    delete: NotRequired[bool]
