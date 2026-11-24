from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status11 import Status11OrStr


class ApiV1ReportsArchiveResponse(SdkBaseModel):
    id: str
    status: Status11OrStr


class ApiV1ReportsArchiveResponseDict(TypedDict):
    id: str
    status: Status11OrStr
