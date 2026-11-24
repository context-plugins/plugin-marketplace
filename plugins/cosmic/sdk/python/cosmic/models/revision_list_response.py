from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .revision import Revision, RevisionDict


class RevisionListResponse(SdkBaseModel):
    revisions: list[Revision]
    total: Optional[int] = UNSET
    limit: Optional[int] = UNSET


class RevisionListResponseDict(TypedDict):
    revisions: list[RevisionDict]
    total: NotRequired[int]
    limit: NotRequired[int]
