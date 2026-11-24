from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1VersionResponse(SdkBaseModel):
    build: Optional[str] = UNSET
    version: Optional[str] = UNSET


class ApiV1VersionResponseDict(TypedDict):
    build: NotRequired[str]
    version: NotRequired[str]
