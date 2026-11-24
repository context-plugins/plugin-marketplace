from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationMethod1AwsCertificateManagerOperationsApi(str, Enum):
    """The validation method for this configuration. Valid values: DNS – Validation using a CNAME record added to your
    DNS configuration. EMAIL – Validation using an approval email sent to domain contacts. HTTP – Validation using an
    HTTP resource placed on your web server."""

    EMAIL = "EMAIL"
    DNS = "DNS"
    HTTP = "HTTP"

    __str__ = str.__str__


ValidationMethod1AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    ValidationMethod1AwsCertificateManagerOperationsApi | str,
    open_enum_validator(ValidationMethod1AwsCertificateManagerOperationsApi),
]
