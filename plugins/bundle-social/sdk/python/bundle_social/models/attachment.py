from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1_bundle_social_automation_api import Type1BundleSocialAutomationApiOrStr


class Attachment(SdkBaseModel):
    upload_id: str = Field(alias="uploadId")
    type_: Type1BundleSocialAutomationApiOrStr = Field(alias="type")


class AttachmentDict(TypedDict):
    upload_id: str
    type_: Type1BundleSocialAutomationApiOrStr
