from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi(str, Enum):
    CERTIFICATE_MANAGER_DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING = "CertificateManager.DescribeAcmeExternalAccountBinding"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi | str,
    open_enum_validator(XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi),
]
