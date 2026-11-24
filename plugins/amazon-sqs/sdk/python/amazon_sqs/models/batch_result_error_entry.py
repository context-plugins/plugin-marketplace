from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchResultErrorEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """The Id of an entry in a batch request."""

    sender_fault: bool = Field(alias="SenderFault")
    """Specifies whether the error happened due to the caller of the batch API action."""

    code: str = Field(alias="Code")
    """An error code representing why the action failed on this entry."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A message explaining why the action failed on this entry."""


class BatchResultErrorEntryDict(TypedDict):
    id: str
    sender_fault: bool
    code: str
    message: NotRequired[str]
