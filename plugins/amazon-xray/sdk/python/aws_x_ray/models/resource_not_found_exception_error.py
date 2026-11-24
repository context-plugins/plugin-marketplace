from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceNotFoundExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    resource_name: Optional[str] = Field(default=UNSET, alias="ResourceName")


class ResourceNotFoundExceptionErrorDict(TypedDict):
    message: NotRequired[str]
    resource_name: NotRequired[str]
