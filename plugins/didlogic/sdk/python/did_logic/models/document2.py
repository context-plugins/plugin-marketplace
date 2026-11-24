from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.approvement_status1 import ApprovementStatus1OrStr
from .file1 import File1, File1Dict


class Document2(SdkBaseModel):
    name: str
    """Document name"""

    id: int
    """Document identifier"""

    user_id: int
    country: str
    """Country of the document, as given at upload; for a letter of intent, the country of the purchased number"""

    created_at: str
    expired_at: str
    approvement_status: ApprovementStatus1OrStr
    """Document approval status (in review = pending, verified = approved)"""

    doc_type: str
    """Document type identifier"""

    identity_id: Any
    identity: Any
    files: list[File1]
    """Uploaded document files"""


class Document2Dict(TypedDict):
    name: str
    id: int
    user_id: int
    country: str
    created_at: str
    expired_at: str
    approvement_status: ApprovementStatus1OrStr
    doc_type: str
    identity_id: Any
    identity: Any
    files: list[File1Dict]
