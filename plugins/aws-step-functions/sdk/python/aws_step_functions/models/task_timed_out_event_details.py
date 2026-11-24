from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TaskTimedOutEventDetails(SdkBaseModel):
    resource_type: str = Field(alias="resourceType")
    """The service name of the resource in a task state."""

    resource: str
    """The action of the resource called by a task state."""

    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""


class TaskTimedOutEventDetailsDict(TypedDict):
    resource_type: str
    resource: str
    error: NotRequired[str]
    cause: NotRequired[str]
