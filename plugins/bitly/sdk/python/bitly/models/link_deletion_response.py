from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deleted_link import DeletedLink, DeletedLinkDict


class LinkDeletionResponse(SdkBaseModel):
    links_deleted: Optional[list[DeletedLink]] = UNSET


class LinkDeletionResponseDict(TypedDict):
    links_deleted: NotRequired[list[DeletedLinkDict]]
