from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.id import Id, IdDict
from .unions.optin_status import OptinStatus, OptinStatusDict
from .unions.package_id import PackageId, PackageIdDict


class PhoneLead(SdkBaseModel):
    """Phone lead record. Additional fields may be returned by the underlying phone inventory."""

    id: Optional[Id] = UNSET
    package_id: OptionalNullable[PackageId] = UNSET
    first_name: OptionalNullable[str] = UNSET
    last_name: OptionalNullable[str] = UNSET
    phone_number: OptionalNullable[str] = UNSET
    country_code: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    postal_code: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    carrier: OptionalNullable[str] = UNSET
    category: OptionalNullable[str] = UNSET
    company_website: OptionalNullable[str] = UNSET
    linkedin_url: OptionalNullable[str] = UNSET
    employee_size: OptionalNullable[str] = UNSET
    revenue: OptionalNullable[str] = UNSET
    seniority: OptionalNullable[str] = UNSET
    technology: OptionalNullable[str] = UNSET
    source: OptionalNullable[str] = UNSET
    optin_status: OptionalNullable[OptinStatus] = UNSET
    created_at: OptionalNullable[str] = UNSET
    updated_at: OptionalNullable[str] = UNSET


class PhoneLeadDict(TypedDict):
    id: NotRequired[IdDict]
    package_id: NotRequired[PackageIdDict | None]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    phone_number: NotRequired[str | None]
    country_code: NotRequired[str | None]
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    postal_code: NotRequired[str | None]
    city: NotRequired[str | None]
    carrier: NotRequired[str | None]
    category: NotRequired[str | None]
    company_website: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    employee_size: NotRequired[str | None]
    revenue: NotRequired[str | None]
    seniority: NotRequired[str | None]
    technology: NotRequired[str | None]
    source: NotRequired[str | None]
    optin_status: NotRequired[OptinStatusDict | None]
    created_at: NotRequired[str | None]
    updated_at: NotRequired[str | None]
