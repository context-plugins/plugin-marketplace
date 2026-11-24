from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1_archbee_public_documents_api import Data1ArchbeePublicDocumentsApi, Data1ArchbeePublicDocumentsApiDict
from .enums.status3 import Status3OrStr


class DocResponse2(SdkBaseModel):
    """Process status"""

    status: Optional[Status3OrStr] = UNSET
    """Response status."""

    data: Optional[Data1ArchbeePublicDocumentsApi] = UNSET


class DocResponse2Dict(TypedDict):
    status: NotRequired[Status3OrStr]
    data: NotRequired[Data1ArchbeePublicDocumentsApiDict]
