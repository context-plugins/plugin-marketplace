from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCertificateManagerCertificatesApi(str, Enum):
    CERTIFICATE_MANAGER_IMPORT_CERTIFICATE = "CertificateManager.ImportCertificate"

    __str__ = str.__str__


XAmzTarget4AwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCertificateManagerCertificatesApi | str,
    open_enum_validator(XAmzTarget4AwsCertificateManagerCertificatesApi),
]
