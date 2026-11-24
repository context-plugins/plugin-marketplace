from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VersionsPublishResponse(SdkBaseModel):
    custom_domain: Optional[str] = Field(default=UNSET, alias="customDomain")
    url: str


class VersionsPublishResponseDict(TypedDict):
    custom_domain: NotRequired[str]
    url: str
