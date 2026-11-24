from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCertificateManagerCertificatesApi(str, Enum):
    CERTIFICATE_MANAGER_GET_CERTIFICATE = "CertificateManager.GetCertificate"

    __str__ = str.__str__


XAmzTarget3AwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCertificateManagerCertificatesApi | str,
    open_enum_validator(XAmzTarget3AwsCertificateManagerCertificatesApi),
]
