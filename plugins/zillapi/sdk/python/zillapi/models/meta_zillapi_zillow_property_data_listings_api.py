from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaZillapiZillowPropertyDataListingsApi(SdkBaseModel):
    count: Optional[int] = UNSET


class MetaZillapiZillowPropertyDataListingsApiDict(TypedDict):
    count: NotRequired[int]
