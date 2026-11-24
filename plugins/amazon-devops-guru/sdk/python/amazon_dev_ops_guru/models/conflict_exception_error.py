from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConflictExceptionError(SdkBaseModel):
    message: str = Field(alias="Message")
    resource_id: str = Field(alias="ResourceId")
    """The ID of the Amazon Web Services resource in which a conflict occurred."""

    resource_type: str = Field(alias="ResourceType")
    """The type of the Amazon Web Services resource in which a conflict occurred."""


class ConflictExceptionErrorDict(TypedDict):
    message: str
    resource_id: str
    resource_type: str
