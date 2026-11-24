from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Status of the current session. Used at the pre-scoring and session creation steps.
      - ``created`` is returned when the request is approved and the customer is eligible to use Tabby
      - ``rejected`` means that there are no available products for a customer
      - ``expired`` and ``approved`` - used for specific type of integration, kindly ignore them if not communicated
            directly"""

    CREATED = "created"
    REJECTED = "rejected"
    EXPIRED = "expired"
    APPROVED = "approved"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
