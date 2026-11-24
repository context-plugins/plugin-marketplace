from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DomainValidationOption(SdkBaseModel):
    domain_name: str = Field(alias="DomainName")
    """A fully qualified domain name (FQDN) in the certificate request."""

    validation_domain: str = Field(alias="ValidationDomain")
    """The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the
    email addresses that you want ACM to use. This must be the same as the DomainName value or a superdomain of the
    DomainName value. For example, if you request a certificate for testing.example.com, you can specify example.com for
    this value. In that case, ACM sends domain validation emails to the following five addresses: admin@example.com
    administrator@example.com hostmaster@example.com postmaster@example.com webmaster@example.com"""


class DomainValidationOptionDict(TypedDict):
    domain_name: str
    validation_domain: str
