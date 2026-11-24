from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompanyCompabaseWatchlistApi(SdkBaseModel):
    entity_id: OptionalNullable[UUID] = UNSET
    name: OptionalNullable[str] = UNSET
    krs: OptionalNullable[str] = UNSET
    nip: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    is_active: OptionalNullable[bool] = UNSET
    revenue_total: OptionalNullable[float] = UNSET
    profit_net: OptionalNullable[float] = UNSET


class CompanyCompabaseWatchlistApiDict(TypedDict):
    entity_id: NotRequired[UUID | None]
    name: NotRequired[str | None]
    krs: NotRequired[str | None]
    nip: NotRequired[str | None]
    city: NotRequired[str | None]
    is_active: NotRequired[bool | None]
    revenue_total: NotRequired[float | None]
    profit_net: NotRequired[float | None]
