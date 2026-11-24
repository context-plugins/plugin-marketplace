from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataArchbeePublicDocumentsApi(SdkBaseModel):
    status: Optional[bool] = UNSET


class DataArchbeePublicDocumentsApiDict(TypedDict):
    status: NotRequired[bool]
