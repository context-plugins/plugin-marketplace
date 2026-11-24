from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi(str, Enum):
    CERTIFICATE_MANAGER_LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS = "CertificateManager.ListAcmeExternalAccountBindings"

    __str__ = str.__str__


XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi | str,
    open_enum_validator(XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi),
]
