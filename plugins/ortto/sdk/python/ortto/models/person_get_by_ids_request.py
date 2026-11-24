from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PersonGetByIdsRequest(SdkBaseModel):
    contact_ids: Optional[list[str]] = UNSET
    fields: Optional[list[str]] = UNSET


class PersonGetByIdsRequestDict(TypedDict):
    contact_ids: NotRequired[list[str]]
    fields: NotRequired[list[str]]
