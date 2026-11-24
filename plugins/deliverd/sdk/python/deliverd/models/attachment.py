from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind_deliverd_dev_reports_api import KindDeliverdDevReportsApiOrStr


class Attachment(SdkBaseModel):
    id: UUID
    kind: KindDeliverdDevReportsApiOrStr
    content_type: str = Field(alias="contentType")
    url: str


class AttachmentDict(TypedDict):
    id: UUID
    kind: KindDeliverdDevReportsApiOrStr
    content_type: str
    url: str
