from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_archbee_public_api_reference_api import (
    DataArchbeePublicApiReferenceApi,
    DataArchbeePublicApiReferenceApiDict,
)
from .enums.status import StatusOrStr


class InfoApiReferenceResponse(SdkBaseModel):
    """Status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[DataArchbeePublicApiReferenceApi] = UNSET


class InfoApiReferenceResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[DataArchbeePublicApiReferenceApiDict]
