from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.approvement_status1 import ApprovementStatus1OrStr
from .enums.doc_type import DocTypeOrStr
from .file1 import File1, File1Dict
from .identity_didlogic_com_kyc_documents_api import (
    IdentityDidlogicComKycDocumentsApi,
    IdentityDidlogicComKycDocumentsApiDict,
)


class Document4(SdkBaseModel):
    """Updated document details"""

    name: str
    """Document name"""

    id: int
    """Document identifier"""

    user_id: int
    """Owner user ID"""

    country: str
    """Country of the document, as given at upload; for a letter of intent, the country of the purchased number"""

    created_at: str
    """Upload timestamp"""

    expired_at: str
    """Document expiration timestamp"""

    approvement_status: ApprovementStatus1OrStr
    """Document approval status (in review = pending, verified = approved)"""

    doc_type: DocTypeOrStr
    """Document type identifier"""

    identity_id: int
    """Associated identity ID"""

    identity: IdentityDidlogicComKycDocumentsApi
    """Identity details"""

    files: list[File1]


class Document4Dict(TypedDict):
    name: str
    id: int
    user_id: int
    country: str
    created_at: str
    expired_at: str
    approvement_status: ApprovementStatus1OrStr
    doc_type: DocTypeOrStr
    identity_id: int
    identity: IdentityDidlogicComKycDocumentsApiDict
    files: list[File1Dict]
