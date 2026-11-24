from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceNotFound(SdkBaseModel):
    message: Optional[str] = UNSET
    resource_name: Optional[str] = Field(default=UNSET, alias="resourceName")


class ResourceNotFoundDict(TypedDict):
    message: NotRequired[str]
    resource_name: NotRequired[str]
