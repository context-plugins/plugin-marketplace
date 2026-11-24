from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallbackType(str, Enum):
    """The type of this callback.

    Possible values:
      - **SUCCESS** Is triggered when the document has been successfully signed by all parties involved.
      - **UPDATE** Is triggered on changes on the ``SignatureRequest`` object like when one person of all involved
            parties has signed.
      - **INITIATE** Is triggered when the signature request is initiated via the endpoint.
      - **ERROR** Is triggered when a person declines the signature or when the ``SignatureRequest`` is withdrawn.
      - **START_SIGN** Is triggered when a person starts the signature process (only for Express QES).
      - **IDENT_PENDING** Is triggered when the identification of a person within a signature process requires manual
            review.
      - **IDENT_ERROR** Is triggered when the identification of a person within a signature process ended in an
            error."""

    SUCCESS = "SUCCESS"
    UPDATE = "UPDATE"
    ERROR = "ERROR"
    START_SIGN = "START_SIGN"
    INITIATE = "INITIATE"
    IDENT_PENDING = "IDENT_PENDING"
    IDENT_ERROR = "IDENT_ERROR"

    __str__ = str.__str__


CallbackTypeOrStr: TypeAlias = Annotated[CallbackType | str, open_enum_validator(CallbackType)]
