from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .build_response import BuildResponse, BuildResponseDict


class BuildListResponse(SdkBaseModel):
    builds: list[BuildResponse]
    total: int


class BuildListResponseDict(TypedDict):
    builds: list[BuildResponseDict]
    total: int
