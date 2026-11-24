from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .part import Part, PartDict


class ApiV1UploadMultipartSignResponse(SdkBaseModel):
    parts: list[Part]


class ApiV1UploadMultipartSignResponseDict(TypedDict):
    parts: list[PartDict]
