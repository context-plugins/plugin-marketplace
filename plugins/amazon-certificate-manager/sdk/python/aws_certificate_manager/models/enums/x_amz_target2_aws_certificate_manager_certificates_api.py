from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerCertificatesApi(str, Enum):
    CERTIFICATE_MANAGER_EXPORT_CERTIFICATE = "CertificateManager.ExportCertificate"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerCertificatesApi | str,
    open_enum_validator(XAmzTarget2AwsCertificateManagerCertificatesApi),
]
