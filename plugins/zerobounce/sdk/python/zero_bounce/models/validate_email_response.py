from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidateEmailResponse(SdkBaseModel):
    address: Optional[str] = UNSET
    status: Optional[str] = UNSET
    sub_status: Optional[str] = UNSET
    free_email: Optional[str] = UNSET
    did_you_mean: Optional[str] = UNSET
    account: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    domain_age_days: Optional[str] = UNSET
    smtp_provider: Optional[str] = UNSET
    mx_found: Optional[str] = UNSET
    firstname: Optional[str] = UNSET
    lastname: Optional[str] = UNSET
    gender: Optional[str] = UNSET
    country: Optional[str] = UNSET
    region: Optional[str] = UNSET
    city: Optional[str] = UNSET
    zipcode: Optional[str] = UNSET
    processed_at: Optional[str] = UNSET


class ValidateEmailResponseDict(TypedDict):
    address: NotRequired[str]
    status: NotRequired[str]
    sub_status: NotRequired[str]
    free_email: NotRequired[str]
    did_you_mean: NotRequired[str]
    account: NotRequired[str]
    domain: NotRequired[str]
    domain_age_days: NotRequired[str]
    smtp_provider: NotRequired[str]
    mx_found: NotRequired[str]
    firstname: NotRequired[str]
    lastname: NotRequired[str]
    gender: NotRequired[str]
    country: NotRequired[str]
    region: NotRequired[str]
    city: NotRequired[str]
    zipcode: NotRequired[str]
    processed_at: NotRequired[str]
