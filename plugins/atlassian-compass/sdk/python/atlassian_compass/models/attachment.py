from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Attachment(SdkBaseModel):
    name: str
    url: str
    last_modified_at: RFC3339DateTime = Field(alias="lastModifiedAt")


class AttachmentDict(TypedDict):
    name: str
    url: str
    last_modified_at: RFC3339DateTime
