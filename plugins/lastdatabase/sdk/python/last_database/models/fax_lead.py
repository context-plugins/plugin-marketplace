from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.id import Id, IdDict
from .unions.optin_status import OptinStatus, OptinStatusDict
from .unions.package_id import PackageId, PackageIdDict


class FaxLead(SdkBaseModel):
    id: Optional[Id] = UNSET
    package_id: OptionalNullable[PackageId] = UNSET
    company_name: OptionalNullable[str] = UNSET
    fax_number: OptionalNullable[str] = UNSET
    industry: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    source: OptionalNullable[str] = UNSET
    optin_status: OptionalNullable[OptinStatus] = UNSET


class FaxLeadDict(TypedDict):
    id: NotRequired[IdDict]
    package_id: NotRequired[PackageIdDict | None]
    company_name: NotRequired[str | None]
    fax_number: NotRequired[str | None]
    industry: NotRequired[str | None]
    country: NotRequired[str | None]
    city: NotRequired[str | None]
    source: NotRequired[str | None]
    optin_status: NotRequired[OptinStatusDict | None]
