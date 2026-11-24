from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerTagApi(str, Enum):
    CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE = "CertificateManager.ListTagsForCertificate"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerTagApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerTagApi | str, open_enum_validator(XAmzTarget1AwsCertificateManagerTagApi)
]
