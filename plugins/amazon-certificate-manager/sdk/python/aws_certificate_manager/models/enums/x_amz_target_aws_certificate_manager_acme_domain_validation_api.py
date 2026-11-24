from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerAcmeDomainValidationApi(str, Enum):
    CERTIFICATE_MANAGER_CREATE_ACME_DOMAIN_VALIDATION = "CertificateManager.CreateAcmeDomainValidation"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerAcmeDomainValidationApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerAcmeDomainValidationApi | str,
    open_enum_validator(XAmzTargetAwsCertificateManagerAcmeDomainValidationApi),
]
