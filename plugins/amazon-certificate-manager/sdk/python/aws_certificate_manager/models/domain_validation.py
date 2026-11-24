from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.validation_method import ValidationMethodOrStr
from .enums.validation_status import ValidationStatusOrStr
from .http_redirect import HttpRedirect, HttpRedirectDict
from .resource_record import ResourceRecord, ResourceRecordDict


class DomainValidation(SdkBaseModel):
    domain_name: str = Field(alias="DomainName")
    """A fully qualified domain name (FQDN) in the certificate. For example, www.example.com or example.com."""

    validation_emails: Optional[list[str]] = Field(default=UNSET, alias="ValidationEmails")
    """A list of email addresses that ACM used to send domain validation emails."""

    validation_domain: Optional[str] = Field(default=UNSET, alias="ValidationDomain")
    """The domain name that ACM used to send domain validation emails."""

    validation_status: Optional[ValidationStatusOrStr] = Field(default=UNSET, alias="ValidationStatus")
    """The validation status of the domain name. This can be one of the following values: PENDING_VALIDATION SUCCESS
    FAILED"""

    resource_record: Optional[ResourceRecord] = Field(default=UNSET, alias="ResourceRecord")
    http_redirect: Optional[HttpRedirect] = Field(default=UNSET, alias="HttpRedirect")
    validation_method: Optional[ValidationMethodOrStr] = Field(default=UNSET, alias="ValidationMethod")
    """Specifies the domain validation method."""


class DomainValidationDict(TypedDict):
    domain_name: str
    validation_emails: NotRequired[list[str]]
    validation_domain: NotRequired[str]
    validation_status: NotRequired[ValidationStatusOrStr]
    resource_record: NotRequired[ResourceRecordDict]
    http_redirect: NotRequired[HttpRedirectDict]
    validation_method: NotRequired[ValidationMethodOrStr]
