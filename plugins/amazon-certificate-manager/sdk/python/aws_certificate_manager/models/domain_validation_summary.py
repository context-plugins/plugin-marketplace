from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .validation_configuration import ValidationConfiguration, ValidationConfigurationDict


class DomainValidationSummary(SdkBaseModel):
    domain_name: str = Field(alias="DomainName")
    """The fully qualified domain name (FQDN) in the certificate for which this validation summary applies."""

    active_validation_configuration: Optional[ValidationConfiguration] = Field(
        default=UNSET, alias="ActiveValidationConfiguration"
    )
    requested_validation_configuration: Optional[ValidationConfiguration] = Field(
        default=UNSET, alias="RequestedValidationConfiguration"
    )


class DomainValidationSummaryDict(TypedDict):
    domain_name: str
    active_validation_configuration: NotRequired[ValidationConfigurationDict]
    requested_validation_configuration: NotRequired[ValidationConfigurationDict]
