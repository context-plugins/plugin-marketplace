from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi(str, Enum):
    CERTIFICATE_MANAGER_DESCRIBE_ACME_DOMAIN_VALIDATION = "CertificateManager.DescribeAcmeDomainValidation"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerAcmeDomainValidationApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi | str,
    open_enum_validator(XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi),
]
