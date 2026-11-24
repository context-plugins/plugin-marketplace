from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RevocationReason1(str, Enum):
    """Specifies why you revoked the certificate."""

    UNSPECIFIED = "UNSPECIFIED"
    KEY_COMPROMISE = "KEY_COMPROMISE"
    CA_COMPROMISE = "CA_COMPROMISE"
    AFFILIATION_CHANGED = "AFFILIATION_CHANGED"
    SUPERCEDED = "SUPERCEDED"
    SUPERSEDED = "SUPERSEDED"
    CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION"
    CERTIFICATE_HOLD = "CERTIFICATE_HOLD"
    REMOVE_FROM_CRL = "REMOVE_FROM_CRL"
    PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN"
    A_A_COMPROMISE = "A_A_COMPROMISE"

    __str__ = str.__str__


RevocationReason1OrStr: TypeAlias = Annotated[RevocationReason1 | str, open_enum_validator(RevocationReason1)]
