from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .domain_validation_method_update_summary import (
    DomainValidationMethodUpdateSummary,
    DomainValidationMethodUpdateSummaryDict,
)
from .enums.status3 import Status3OrStr
from .enums.type3 import Type3OrStr


class UpdateSummary(SdkBaseModel):
    status: Optional[Status3OrStr] = Field(default=UNSET, alias="Status")
    """The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION – The certificate
    update is waiting for domain ownership validation to complete. SUCCESS – The certificate was updated successfully.
    FAILED – The certificate update failed."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="Type")
    """The type of update that was requested for the certificate. The following are valid values:
    DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate."""

    domain_validation_method_update_summary: Optional[DomainValidationMethodUpdateSummary] = Field(
        default=UNSET, alias="DomainValidationMethodUpdateSummary"
    )
    requested_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RequestedAt")
    """The time at which the certificate update was requested."""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="UpdatedAt")
    """The time at which the certificate update status was last changed."""


class UpdateSummaryDict(TypedDict):
    status: NotRequired[Status3OrStr]
    type_: NotRequired[Type3OrStr]
    domain_validation_method_update_summary: NotRequired[DomainValidationMethodUpdateSummaryDict]
    requested_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
