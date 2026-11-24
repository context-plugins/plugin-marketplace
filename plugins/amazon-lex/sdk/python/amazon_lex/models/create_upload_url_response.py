from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateUploadUrlResponse(SdkBaseModel):
    import_id: Optional[str] = Field(default=UNSET, alias="importId")
    """An identifier for a unique import job. Use it when you call the StartImport operation."""

    upload_url: Optional[str] = Field(default=UNSET, alias="uploadUrl")
    """A pre-signed S3 write URL. Upload the zip archive file that contains the definition of your bot or bot locale."""


class CreateUploadUrlResponseDict(TypedDict):
    import_id: NotRequired[str]
    upload_url: NotRequired[str]
