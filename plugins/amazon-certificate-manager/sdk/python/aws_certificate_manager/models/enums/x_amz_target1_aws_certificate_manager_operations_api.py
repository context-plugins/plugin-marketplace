from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_REQUEST_CERTIFICATE = "CertificateManager.RequestCertificate"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget1AwsCertificateManagerOperationsApi),
]
