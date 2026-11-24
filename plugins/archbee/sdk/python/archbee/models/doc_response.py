from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_archbee_public_documents_api import DataArchbeePublicDocumentsApi, DataArchbeePublicDocumentsApiDict
from .enums.status import StatusOrStr


class DocResponse(SdkBaseModel):
    """Delete status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[DataArchbeePublicDocumentsApi] = UNSET


class DocResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[DataArchbeePublicDocumentsApiDict]
