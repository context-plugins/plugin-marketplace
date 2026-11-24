from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VersionsPublishAnonRequest(SdkBaseModel):
    spec_data: Optional[str] = Field(default=UNSET, alias="specData")
    url: Optional[str] = UNSET


class VersionsPublishAnonRequestDict(TypedDict):
    spec_data: NotRequired[str]
    url: NotRequired[str]
