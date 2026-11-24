from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaZillapiZillowPropertyDataJobsApi(SdkBaseModel):
    limit: Optional[int] = UNSET
    offset: Optional[int] = UNSET


class MetaZillapiZillowPropertyDataJobsApiDict(TypedDict):
    limit: NotRequired[int]
    offset: NotRequired[int]
