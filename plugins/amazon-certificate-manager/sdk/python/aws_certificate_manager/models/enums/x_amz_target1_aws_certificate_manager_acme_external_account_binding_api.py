from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi(str, Enum):
    CERTIFICATE_MANAGER_DELETE_ACME_EXTERNAL_ACCOUNT_BINDING = "CertificateManager.DeleteAcmeExternalAccountBinding"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi | str,
    open_enum_validator(XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi),
]
