from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelMessageMoveTaskResult(SdkBaseModel):
    approximate_number_of_messages_moved: Optional[int] = Field(default=UNSET, alias="ApproximateNumberOfMessagesMoved")
    """The approximate number of messages already moved to the destination queue."""


class CancelMessageMoveTaskResultDict(TypedDict):
    approximate_number_of_messages_moved: NotRequired[int]
