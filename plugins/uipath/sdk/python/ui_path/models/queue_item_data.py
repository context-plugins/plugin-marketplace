from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.priority import PriorityOrStr


class QueueItemData(SdkBaseModel):
    """Data for creating a new queue item"""

    name: str = Field(alias="Name")
    """Name of the target queue definition"""

    priority: Optional[PriorityOrStr] = Field(default=UNSET, alias="Priority")
    """Priority level for queue processing"""

    specific_content: Optional[Any] = Field(default=UNSET, alias="SpecificContent")
    """Custom key-value payload data for the item"""

    reference: Optional[str] = Field(default=UNSET, alias="Reference")
    """Optional unique reference string for this item"""

    due_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="DueDate")
    """Optional deadline by which the item should be processed"""

    postpone_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="PostponeDate")
    """Optional earliest time at which the item may be processed"""


class QueueItemDataDict(TypedDict):
    name: str
    priority: NotRequired[PriorityOrStr]
    specific_content: NotRequired[Any]
    reference: NotRequired[str]
    due_date: NotRequired[RFC3339DateTime]
    postpone_date: NotRequired[RFC3339DateTime]
