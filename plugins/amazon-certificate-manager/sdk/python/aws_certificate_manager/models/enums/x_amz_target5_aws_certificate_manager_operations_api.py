from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS = "CertificateManager.GetAcmeExternalAccountBindingCredentials"

    __str__ = str.__str__


XAmzTarget5AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget5AwsCertificateManagerOperationsApi),
]
