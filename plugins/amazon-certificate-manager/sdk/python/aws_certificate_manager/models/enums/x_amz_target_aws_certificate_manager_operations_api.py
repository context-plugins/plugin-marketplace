from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_RENEW_CERTIFICATE = "CertificateManager.RenewCertificate"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTargetAwsCertificateManagerOperationsApi),
]
