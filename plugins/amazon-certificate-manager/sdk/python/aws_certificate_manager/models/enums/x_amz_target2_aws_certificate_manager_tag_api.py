from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerTagApi(str, Enum):
    CERTIFICATE_MANAGER_LIST_TAGS_FOR_RESOURCE = "CertificateManager.ListTagsForResource"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerTagApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerTagApi | str, open_enum_validator(XAmzTarget2AwsCertificateManagerTagApi)
]
