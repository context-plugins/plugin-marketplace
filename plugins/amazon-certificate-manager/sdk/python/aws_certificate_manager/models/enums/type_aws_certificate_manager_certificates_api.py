from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsCertificateManagerCertificatesApi(str, Enum):
    """The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates
    that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported
    certificates. For more information about the differences between certificates that you import and those that ACM
    provides, see Importing Certificates in the Certificate Manager User Guide."""

    IMPORTED = "IMPORTED"
    AMAZON_ISSUED = "AMAZON_ISSUED"
    PRIVATE = "PRIVATE"

    __str__ = str.__str__


TypeAwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    TypeAwsCertificateManagerCertificatesApi | str, open_enum_validator(TypeAwsCertificateManagerCertificatesApi)
]
