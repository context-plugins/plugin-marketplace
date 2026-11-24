from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinksConnectJobsApi(SdkBaseModel):
    link: Optional[str] = UNSET
    self: Optional[str] = UNSET
    source: Optional[str] = UNSET


class LinksConnectJobsApiDict(TypedDict):
    link: NotRequired[str]
    self: NotRequired[str]
    source: NotRequired[str]
