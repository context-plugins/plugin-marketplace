from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_TAG_RESOURCE = "CertificateManager.TagResource"

    __str__ = str.__str__


XAmzTarget7AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget7AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget7AwsCertificateManagerOperationsApi),
]
