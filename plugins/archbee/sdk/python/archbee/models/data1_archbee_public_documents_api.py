from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data1ArchbeePublicDocumentsApi(SdkBaseModel):
    doc_id: Optional[str] = Field(default=UNSET, alias="docId")
    new_record: Optional[bool] = Field(default=UNSET, alias="newRecord")


class Data1ArchbeePublicDocumentsApiDict(TypedDict):
    doc_id: NotRequired[str]
    new_record: NotRequired[bool]
