from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1UploadsResponse(SdkBaseModel):
    upload_id: UUID = Field(alias="uploadId")
    upload_url: str = Field(alias="uploadUrl")
    method: Literal["PUT"] = "PUT"


class ApiV1UploadsResponseDict(TypedDict):
    upload_id: UUID
    upload_url: str
    method: Literal["PUT"]
