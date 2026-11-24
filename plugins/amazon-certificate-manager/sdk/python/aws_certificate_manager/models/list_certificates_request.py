from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.certificate_key_pair_origin4 import CertificateKeyPairOrigin4OrStr
from .enums.certificate_status import CertificateStatusOrStr
from .enums.sort_by import SortByOrStr
from .enums.sort_order import SortOrderOrStr
from .filters import Filters, FiltersDict


class ListCertificatesRequest(SdkBaseModel):
    certificate_statuses: Optional[list[CertificateStatusOrStr]] = Field(default=UNSET, alias="CertificateStatuses")
    """Filter the certificate list by status value."""

    certificate_key_pair_origins: Optional[list[CertificateKeyPairOrigin4OrStr]] = Field(
        default=UNSET, alias="CertificateKeyPairOrigins"
    )
    """Filter the certificate list by certificate key pair origin. Specify one or more CertificateKeyPairOrigin values.
    Default filtering returns only certificates with key pair origin of AWS_MANAGED and CUSTOMER_PROVIDED."""

    includes: Optional[Filters] = Field(default=UNSET, alias="Includes")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Use this parameter only when paginating results and only in a subsequent request after you receive a response
    with truncated results. Set it to the value of NextToken from the response you just received."""

    max_items: Optional[int] = Field(default=UNSET, alias="MaxItems")
    """Use this parameter when paginating results to specify the maximum number of items to return in the response. If
    additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this
    NextToken value in a subsequent request to retrieve additional items."""

    sort_by: Optional[SortByOrStr] = Field(default=UNSET, alias="SortBy")
    """Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder."""

    sort_order: Optional[SortOrderOrStr] = Field(default=UNSET, alias="SortOrder")
    """Specifies the order of sorted results. If you specify SortOrder, you must also specify SortBy."""


class ListCertificatesRequestDict(TypedDict):
    certificate_statuses: NotRequired[list[CertificateStatusOrStr]]
    certificate_key_pair_origins: NotRequired[list[CertificateKeyPairOrigin4OrStr]]
    includes: NotRequired[FiltersDict]
    next_token: NotRequired[str]
    max_items: NotRequired[int]
    sort_by: NotRequired[SortByOrStr]
    sort_order: NotRequired[SortOrderOrStr]
