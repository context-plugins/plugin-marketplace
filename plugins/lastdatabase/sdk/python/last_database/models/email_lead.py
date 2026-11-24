from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.id import Id, IdDict
from .unions.package_id import PackageId, PackageIdDict


class EmailLead(SdkBaseModel):
    """Email lead record. Additional fields may be returned by the underlying email inventory."""

    id: Optional[Id] = UNSET
    package_id: OptionalNullable[PackageId] = UNSET
    first_name: OptionalNullable[str] = UNSET
    last_name: OptionalNullable[str] = UNSET
    email: OptionalNullable[str] = UNSET
    company_name: OptionalNullable[str] = UNSET
    company_website: OptionalNullable[str] = UNSET
    linkedin_url: OptionalNullable[str] = UNSET
    employee_size: OptionalNullable[str] = UNSET
    revenue: OptionalNullable[str] = UNSET
    seniority: OptionalNullable[str] = UNSET
    technology: OptionalNullable[str] = UNSET
    job_title: OptionalNullable[str] = UNSET
    industry: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    postal_code: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    source: OptionalNullable[str] = UNSET
    created_at: OptionalNullable[str] = UNSET


class EmailLeadDict(TypedDict):
    id: NotRequired[IdDict]
    package_id: NotRequired[PackageIdDict | None]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    email: NotRequired[str | None]
    company_name: NotRequired[str | None]
    company_website: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    employee_size: NotRequired[str | None]
    revenue: NotRequired[str | None]
    seniority: NotRequired[str | None]
    technology: NotRequired[str | None]
    job_title: NotRequired[str | None]
    industry: NotRequired[str | None]
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    postal_code: NotRequired[str | None]
    city: NotRequired[str | None]
    source: NotRequired[str | None]
    created_at: NotRequired[str | None]
