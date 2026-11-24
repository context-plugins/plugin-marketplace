from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .delivery_status import DeliveryStatus, DeliveryStatusDict
from .enums.subtype import SubtypeOrStr
from .operation_status import OperationStatus, OperationStatusDict


class CustomAudience(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the custom audience"""

    name: Optional[str] = UNSET
    """The name of the custom audience"""

    description: Optional[str] = UNSET
    """Description of the audience"""

    subtype: Optional[SubtypeOrStr] = UNSET
    """The subtype of the custom audience"""

    approximate_count: Optional[int] = UNSET
    """Approximate number of people in the audience"""

    data_source: Optional[DataSource] = UNSET
    """The source of the audience data"""

    delivery_status: Optional[DeliveryStatus] = UNSET
    operation_status: Optional[OperationStatus] = UNSET
    time_created: Optional[RFC3339DateTime] = UNSET
    time_updated: Optional[RFC3339DateTime] = UNSET


class CustomAudienceDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    subtype: NotRequired[SubtypeOrStr]
    approximate_count: NotRequired[int]
    data_source: NotRequired[DataSourceDict]
    delivery_status: NotRequired[DeliveryStatusDict]
    operation_status: NotRequired[OperationStatusDict]
    time_created: NotRequired[RFC3339DateTime]
    time_updated: NotRequired[RFC3339DateTime]
