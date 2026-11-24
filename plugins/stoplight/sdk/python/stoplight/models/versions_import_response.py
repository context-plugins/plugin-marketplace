from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict


class VersionsImportResponse(SdkBaseModel):
    data: Data


class VersionsImportResponseDict(TypedDict):
    data: DataDict
