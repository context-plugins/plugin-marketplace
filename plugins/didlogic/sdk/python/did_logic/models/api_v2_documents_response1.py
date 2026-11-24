from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .document1 import Document1, Document1Dict


class ApiV2DocumentsResponse1(SdkBaseModel):
    message: str
    """Success message"""

    document_id: int
    """Created document ID"""

    document: Document1
    """Created document details"""


class ApiV2DocumentsResponse1Dict(TypedDict):
    message: str
    document_id: int
    document: Document1Dict
