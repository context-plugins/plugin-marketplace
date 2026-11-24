from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResourceNotFoundExceptionError(SdkBaseModel):
    message: str = Field(alias="Message")
    resource_id: str = Field(alias="ResourceId")
    """The ID of the Amazon Web Services resource that could not be found."""

    resource_type: str = Field(alias="ResourceType")
    """The type of the Amazon Web Services resource that could not be found."""


class ResourceNotFoundExceptionErrorDict(TypedDict):
    message: str
    resource_id: str
    resource_type: str
