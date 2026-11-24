from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeletedLink(SdkBaseModel):
    id: Optional[str] = UNSET


class DeletedLinkDict(TypedDict):
    id: NotRequired[str]
