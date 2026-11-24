from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_filter_statement import CertificateFilterStatement, CertificateFilterStatementDict
from .enums.sort_by1 import SortBy1OrStr
from .enums.sort_order1 import SortOrder1OrStr


class SearchCertificatesRequest(SdkBaseModel):
    filter_statement: Optional[CertificateFilterStatement] = Field(default=UNSET, alias="FilterStatement")
    """Exactly one member is set."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return in the response. Default is 100."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Use this parameter only when paginating results and only in a subsequent request after you receive a response
    with truncated results. Set it to the value of NextToken from the response you just received."""

    sort_by: Optional[SortBy1OrStr] = Field(default=UNSET, alias="SortBy")
    """Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS, RENEWAL_STATUS, EXPORTED,
    IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN, COMMON_NAME, REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT,
    MANAGED_BY, EXPORT_OPTION, VALIDATION_METHOD, and IMPORTED_AT."""

    sort_order: Optional[SortOrder1OrStr] = Field(default=UNSET, alias="SortOrder")
    """Specifies the order of sorted results. Valid values are ASCENDING or DESCENDING."""


class SearchCertificatesRequestDict(TypedDict):
    filter_statement: NotRequired[CertificateFilterStatementDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[SortBy1OrStr]
    sort_order: NotRequired[SortOrder1OrStr]
