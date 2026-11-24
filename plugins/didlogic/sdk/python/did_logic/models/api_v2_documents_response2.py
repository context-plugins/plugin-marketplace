from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .document2 import Document2, Document2Dict


class ApiV2DocumentsResponse2(SdkBaseModel):
    document: Document2


class ApiV2DocumentsResponse2Dict(TypedDict):
    document: Document2Dict
