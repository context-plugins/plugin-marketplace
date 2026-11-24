from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1HouseholdsContactsRequest(SdkBaseModel):
    contact_id: int


class V1HouseholdsContactsRequestDict(TypedDict):
    contact_id: int
