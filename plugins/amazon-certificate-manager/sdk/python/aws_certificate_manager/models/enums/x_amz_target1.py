from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1(str, Enum):
    CERTIFICATE_MANAGER_LIST_ACME_ACCOUNTS = "CertificateManager.ListAcmeAccounts"

    __str__ = str.__str__


XAmzTarget1OrStr: TypeAlias = Annotated[XAmzTarget1 | str, open_enum_validator(XAmzTarget1)]
