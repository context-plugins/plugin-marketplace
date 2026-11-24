from __future__ import annotations

from typing import TypeAlias

from ..base64_content import Base64Content, Base64ContentDict
from ..document_id import DocumentId, DocumentIdDict
from ..file_url import FileUrl, FileUrlDict

CreateSignatureRequest1: TypeAlias = Base64Content | FileUrl | DocumentId

CreateSignatureRequest1Dict: TypeAlias = Base64ContentDict | FileUrlDict | DocumentIdDict
