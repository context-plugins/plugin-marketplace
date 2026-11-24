from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bitlink_body import BitlinkBody, BitlinkBodyDict
from .bitlinks_pagination import BitlinksPagination, BitlinksPaginationDict


class Bitlinks(SdkBaseModel):
    links: Optional[list[BitlinkBody]] = UNSET
    pagination: Optional[BitlinksPagination] = UNSET


class BitlinksDict(TypedDict):
    links: NotRequired[list[BitlinkBodyDict]]
    pagination: NotRequired[BitlinksPaginationDict]
