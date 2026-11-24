from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import_format_response import ImportFormatResponse, ImportFormatResponseDict


class ImportFormatListResponse(SdkBaseModel):
    formats: list[ImportFormatResponse]


class ImportFormatListResponseDict(TypedDict):
    formats: list[ImportFormatResponseDict]
