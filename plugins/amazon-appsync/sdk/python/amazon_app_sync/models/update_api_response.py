from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api import Api, ApiDict


class UpdateApiResponse(SdkBaseModel):
    api: Optional[Api] = UNSET


class UpdateApiResponseDict(TypedDict):
    api: NotRequired[ApiDict]
