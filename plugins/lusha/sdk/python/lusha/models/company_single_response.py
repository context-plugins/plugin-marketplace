from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_error_response import CompanyErrorResponse, CompanyErrorResponseDict
from .company_single_response_data import CompanySingleResponseData, CompanySingleResponseDataDict


class CompanySingleResponse(SdkBaseModel):
    data: Optional[CompanySingleResponseData] = UNSET
    errors: Optional[CompanyErrorResponse] = UNSET
    meta: Optional[Any] = UNSET
    """Currently returns an empty value; this field should be deprecated in future releases."""


class CompanySingleResponseDict(TypedDict):
    data: NotRequired[CompanySingleResponseDataDict]
    errors: NotRequired[CompanyErrorResponseDict]
    meta: NotRequired[Any]
