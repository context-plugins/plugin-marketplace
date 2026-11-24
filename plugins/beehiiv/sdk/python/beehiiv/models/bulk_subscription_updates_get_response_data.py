from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bulk_subscription_updates_get_response_data_status import BulkSubscriptionUpdatesGetResponseDataStatusOrStr
from .enums.bulk_subscription_updates_list_response_data_item_type import (
    BulkSubscriptionUpdatesListResponseDataItemTypeOrStr,
)


class BulkSubscriptionUpdatesGetResponseData(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the update object"""

    type_: Optional[BulkSubscriptionUpdatesListResponseDataItemTypeOrStr] = Field(default=UNSET, alias="type")
    """The type of update (status or bulk)"""

    params: Optional[str] = UNSET
    """The parameters passed in for the update"""

    status: Optional[BulkSubscriptionUpdatesGetResponseDataStatusOrStr] = UNSET
    """The status of the update"""

    publication_id: Optional[str] = UNSET
    """The publication ID associated with this update"""

    failure_reason: Optional[str] = UNSET
    """If the job as a whole fails, this will detail the errors encountered"""

    completed: Optional[int] = UNSET
    """The timestamp of the job's completion"""

    created: Optional[int] = UNSET
    """The timestamp of the job's creation"""

    updated: Optional[int] = UNSET
    """The timestamp of the job's update"""

    error_log: Optional[list[str]] = UNSET
    """An array of errors encountered for individual updates within the job"""


class BulkSubscriptionUpdatesGetResponseDataDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[BulkSubscriptionUpdatesListResponseDataItemTypeOrStr]
    params: NotRequired[str]
    status: NotRequired[BulkSubscriptionUpdatesGetResponseDataStatusOrStr]
    publication_id: NotRequired[str]
    failure_reason: NotRequired[str]
    completed: NotRequired[int]
    created: NotRequired[int]
    updated: NotRequired[int]
    error_log: NotRequired[list[str]]
