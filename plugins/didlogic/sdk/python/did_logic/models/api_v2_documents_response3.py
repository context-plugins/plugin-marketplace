from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .document4 import Document4, Document4Dict


class ApiV2DocumentsResponse3(SdkBaseModel):
    message: str
    """Success message"""

    document_id: int
    document: Document4
    """Updated document details"""


class ApiV2DocumentsResponse3Dict(TypedDict):
    message: str
    document_id: int
    document: Document4Dict
