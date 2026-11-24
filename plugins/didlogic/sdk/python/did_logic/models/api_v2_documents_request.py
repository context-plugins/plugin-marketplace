from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document3 import Document3, Document3Dict


class ApiV2DocumentsRequest(SdkBaseModel):
    document: Optional[Document3] = UNSET


class ApiV2DocumentsRequestDict(TypedDict):
    document: NotRequired[Document3Dict]
