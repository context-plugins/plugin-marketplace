from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerCertificatesApi(str, Enum):
    CERTIFICATE_MANAGER_DELETE_CERTIFICATE = "CertificateManager.DeleteCertificate"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerCertificatesApi | str,
    open_enum_validator(XAmzTargetAwsCertificateManagerCertificatesApi),
]
