from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureStatusOverall1(str, Enum):
    """Overall signing status of the document.

    Possible values:
      - **OPEN** At least one user has not signed or declined their signature yet.
      - **DECLINED** At least one user declined to sign. The signature request failed.
      - **WITHDRAWN** The owner has withdrawn the signature request.
      - **SIGNED** All users signed the document. The signature request was successfully completed.
      - **EXPIRED** The owner-set ``expires_at`` date has passed before all signers signed. Terminal status.
      - **ERROR** A technical error occurred. The signature request cannot be completed."""

    OPEN = "OPEN"
    DECLINED = "DECLINED"
    WITHDRAWN = "WITHDRAWN"
    SIGNED = "SIGNED"
    EXPIRED = "EXPIRED"
    ERROR = "ERROR"

    __str__ = str.__str__


SignatureStatusOverall1OrStr: TypeAlias = Annotated[
    SignatureStatusOverall1 | str, open_enum_validator(SignatureStatusOverall1)
]
