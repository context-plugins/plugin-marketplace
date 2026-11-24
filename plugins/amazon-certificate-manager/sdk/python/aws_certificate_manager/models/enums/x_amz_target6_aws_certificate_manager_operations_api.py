from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_LIST_CERTIFICATE_DOMAIN_VALIDATIONS = "CertificateManager.ListCertificateDomainValidations"

    __str__ = str.__str__


XAmzTarget6AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget6AwsCertificateManagerOperationsApi),
]
