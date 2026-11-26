from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListPartnersFilter(SdkBaseModel):
    name: Optional[str] = UNSET


class ListPartnersFilterDict(TypedDict):
    name: NotRequired[str]
