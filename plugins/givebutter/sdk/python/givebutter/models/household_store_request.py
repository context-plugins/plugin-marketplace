from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HouseholdStoreRequest(SdkBaseModel):
    name: str
    head_contact_id: OptionalNullable[int] = UNSET
    note: OptionalNullable[str] = UNSET
    envelope_name: OptionalNullable[str] = UNSET


class HouseholdStoreRequestDict(TypedDict):
    name: str
    head_contact_id: NotRequired[int | None]
    note: NotRequired[str | None]
    envelope_name: NotRequired[str | None]
