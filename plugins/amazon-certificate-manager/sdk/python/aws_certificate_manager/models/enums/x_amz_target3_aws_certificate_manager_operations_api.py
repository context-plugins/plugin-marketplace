from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_GET_ACCOUNT_CONFIGURATION = "CertificateManager.GetAccountConfiguration"

    __str__ = str.__str__


XAmzTarget3AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget3AwsCertificateManagerOperationsApi),
]
