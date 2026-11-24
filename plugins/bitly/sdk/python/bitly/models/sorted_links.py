from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bitlink_body import BitlinkBody, BitlinkBodyDict
from .click_link import ClickLink, ClickLinkDict


class SortedLinks(SdkBaseModel):
    links: Optional[list[BitlinkBody]] = UNSET
    sorted_links: Optional[list[ClickLink]] = UNSET


class SortedLinksDict(TypedDict):
    links: NotRequired[list[BitlinkBodyDict]]
    sorted_links: NotRequired[list[ClickLinkDict]]
