from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class DatumCommonelementsComProfessionalsAndLicensesApi(SdkBaseModel):
    license_number: Optional[str] = UNSET
    """License number as issued."""

    license_type: OptionalNullable[str] = UNSET
    """License class and its description."""

    license_type_desc: OptionalNullable[str] = UNSET
    """License class and its description."""

    name: OptionalNullable[str] = UNSET
    """Licensee name and trade name."""

    dba: OptionalNullable[str] = UNSET
    """Licensee name and trade name."""

    status: OptionalNullable[str] = UNSET
    """Board status verbatim from the source roll."""

    issue_date: OptionalNullable[Date] = UNSET
    """License dates verbatim from the source roll."""

    expiry_date: OptionalNullable[Date] = UNSET
    """License dates verbatim from the source roll."""

    city: OptionalNullable[str] = UNSET
    """Address of record."""

    county: OptionalNullable[str] = UNSET
    """Address of record."""

    board: OptionalNullable[str] = UNSET
    """Issuing board."""

    organization_id: OptionalNullable[UUID] = UNSET
    """Linked Common Elements org, when the licensee resolves to one."""

    is_expired: Optional[bool] = UNSET
    """True when expiry_date is in the past."""

    is_active: Optional[bool] = UNSET
    """The trust signal to branch on: status reads current/active/valid/clear AND the license is not past expiry."""


class DatumCommonelementsComProfessionalsAndLicensesApiDict(TypedDict):
    license_number: NotRequired[str]
    license_type: NotRequired[str | None]
    license_type_desc: NotRequired[str | None]
    name: NotRequired[str | None]
    dba: NotRequired[str | None]
    status: NotRequired[str | None]
    issue_date: NotRequired[Date | None]
    expiry_date: NotRequired[Date | None]
    city: NotRequired[str | None]
    county: NotRequired[str | None]
    board: NotRequired[str | None]
    organization_id: NotRequired[UUID | None]
    is_expired: NotRequired[bool]
    is_active: NotRequired[bool]
