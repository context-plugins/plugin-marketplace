from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageSyncTokensRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """What it is for, e.g. deploy or ci. Defaults to "Form sync"."""


class ApiV1ManageSyncTokensRequestDict(TypedDict):
    name: NotRequired[str]
