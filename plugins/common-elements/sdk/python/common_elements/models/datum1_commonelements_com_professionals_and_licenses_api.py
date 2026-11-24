from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class Datum1CommonelementsComProfessionalsAndLicensesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """License record id. Pass this to the detail endpoints below."""

    state: Optional[str] = UNSET
    """Issuing jurisdiction and board."""

    board: Optional[str] = UNSET
    """Issuing jurisdiction and board."""

    license_number: OptionalNullable[str] = UNSET
    """License identity."""

    license_type: OptionalNullable[str] = UNSET
    """License identity."""

    license_type_desc: OptionalNullable[str] = UNSET
    """License identity."""

    name: OptionalNullable[str] = UNSET
    """Licensee name and trade name."""

    dba: OptionalNullable[str] = UNSET
    """Licensee name and trade name."""

    status: OptionalNullable[str] = UNSET
    """Board status verbatim."""

    issue_date: OptionalNullable[Date] = UNSET
    """License dates verbatim."""

    expiry_date: OptionalNullable[Date] = UNSET
    """License dates verbatim."""

    is_expired: Optional[bool] = UNSET
    """True when expiry_date is in the past."""

    city: OptionalNullable[str] = UNSET
    """Address of record."""

    county: OptionalNullable[str] = UNSET
    """Address of record."""

    zip: OptionalNullable[str] = UNSET
    """Address of record."""

    organization_id: OptionalNullable[UUID] = UNSET
    """Linked Common Elements org, when one is resolved."""


class Datum1CommonelementsComProfessionalsAndLicensesApiDict(TypedDict):
    id: NotRequired[UUID]
    state: NotRequired[str]
    board: NotRequired[str]
    license_number: NotRequired[str | None]
    license_type: NotRequired[str | None]
    license_type_desc: NotRequired[str | None]
    name: NotRequired[str | None]
    dba: NotRequired[str | None]
    status: NotRequired[str | None]
    issue_date: NotRequired[Date | None]
    expiry_date: NotRequired[Date | None]
    is_expired: NotRequired[bool]
    city: NotRequired[str | None]
    county: NotRequired[str | None]
    zip: NotRequired[str | None]
    organization_id: NotRequired[UUID | None]
