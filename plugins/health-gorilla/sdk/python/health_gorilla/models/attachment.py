from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Attachment(SdkBaseModel):
    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    url: Optional[str] = UNSET


class AttachmentDict(TypedDict):
    content_type: NotRequired[str]
    url: NotRequired[str]
