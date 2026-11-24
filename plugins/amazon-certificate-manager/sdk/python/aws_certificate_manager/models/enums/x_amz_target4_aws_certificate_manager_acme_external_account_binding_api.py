from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi(str, Enum):
    CERTIFICATE_MANAGER_REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING = "CertificateManager.RevokeAcmeExternalAccountBinding"

    __str__ = str.__str__


XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi | str,
    open_enum_validator(XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi),
]
