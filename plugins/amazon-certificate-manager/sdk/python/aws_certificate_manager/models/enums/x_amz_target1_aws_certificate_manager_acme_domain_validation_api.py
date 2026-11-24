from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi(str, Enum):
    CERTIFICATE_MANAGER_DELETE_ACME_DOMAIN_VALIDATION = "CertificateManager.DeleteAcmeDomainValidation"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerAcmeDomainValidationApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi | str,
    open_enum_validator(XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi),
]
