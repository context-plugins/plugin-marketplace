from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_archbee_public_file_manager_api import DataArchbeePublicFileManagerApi, DataArchbeePublicFileManagerApiDict
from .enums.status import StatusOrStr


class UploadFileResponse(SdkBaseModel):
    """Upload OK status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[DataArchbeePublicFileManagerApi] = UNSET


class UploadFileResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[DataArchbeePublicFileManagerApiDict]
