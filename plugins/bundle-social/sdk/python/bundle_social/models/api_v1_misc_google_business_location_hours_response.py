from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscGoogleBusinessLocationHoursResponse(SdkBaseModel):
    name: Optional[str] = UNSET


class ApiV1MiscGoogleBusinessLocationHoursResponseDict(TypedDict):
    name: NotRequired[str]
