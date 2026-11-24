from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi(str, Enum):
    CERTIFICATE_MANAGER_CREATE_ACME_EXTERNAL_ACCOUNT_BINDING = "CertificateManager.CreateAcmeExternalAccountBinding"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi | str,
    open_enum_validator(XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi),
]
