from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api import Api, ApiDict


class GetApiResponse(SdkBaseModel):
    api: Optional[Api] = UNSET


class GetApiResponseDict(TypedDict):
    api: NotRequired[ApiDict]
