from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerCertificatesApi(str, Enum):
    CERTIFICATE_MANAGER_DESCRIBE_CERTIFICATE = "CertificateManager.DescribeCertificate"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerCertificatesApi | str,
    open_enum_validator(XAmzTarget1AwsCertificateManagerCertificatesApi),
]
