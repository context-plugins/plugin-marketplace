from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class DatumCommonelementsComAssociationResourcesApi(SdkBaseModel):
    source_key: Optional[str] = UNSET
    """Which physical source the record came from. Provenance travels with every row."""

    record_id: Optional[str] = UNSET
    """The source's own identifier for the record."""

    occurred_on: OptionalNullable[Date] = UNSET
    """When the recorded event happened, where the source publishes a date."""

    headline: OptionalNullable[str] = UNSET
    """One-line description of the record, from the source's own headline column."""

    payload: OptionalNullable[Any] = UNSET
    """The record's fields, projected through the source's column allowlist. A column added to a backing table later
    cannot appear here unless it is added to that allowlist."""


class DatumCommonelementsComAssociationResourcesApiDict(TypedDict):
    source_key: NotRequired[str]
    record_id: NotRequired[str]
    occurred_on: NotRequired[Date | None]
    headline: NotRequired[str | None]
    payload: NotRequired[Any | None]
