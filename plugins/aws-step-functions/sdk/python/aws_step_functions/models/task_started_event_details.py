from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TaskStartedEventDetails(SdkBaseModel):
    resource_type: str = Field(alias="resourceType")
    """The service name of the resource in a task state."""

    resource: str
    """The action of the resource called by a task state."""


class TaskStartedEventDetailsDict(TypedDict):
    resource_type: str
    resource: str
