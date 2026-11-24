from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .part import Part, PartDict


class ApiV1UploadMultipartInitResponse(SdkBaseModel):
    upload_id: str = Field(alias="uploadId")
    path: str
    part_size: int = Field(alias="partSize")
    parts: list[Part]


class ApiV1UploadMultipartInitResponseDict(TypedDict):
    upload_id: str
    path: str
    part_size: int
    parts: list[PartDict]
