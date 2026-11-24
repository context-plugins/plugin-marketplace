from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION – The certificate
    update is waiting for domain ownership validation to complete. SUCCESS – The certificate was updated successfully.
    FAILED – The certificate update failed."""

    PENDING_DOMAIN_VALIDATION = "PENDING_DOMAIN_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
