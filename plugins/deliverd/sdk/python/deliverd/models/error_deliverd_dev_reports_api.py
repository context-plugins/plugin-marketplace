from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .details import Details, DetailsDict


class ErrorDeliverdDevReportsApi(SdkBaseModel):
    code: Literal["version_conflict"] = "version_conflict"
    message: str
    details: Details


class ErrorDeliverdDevReportsApiDict(TypedDict):
    code: Literal["version_conflict"]
    message: str
    details: DetailsDict
