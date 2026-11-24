from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallbackState(str, Enum):
    """The state of the callback.

    Possible values:
      - **OPEN** The callback request will be executed in the next execution cycle.
      - **COMPLETED** The callback request was executed successfully. The API received an HTTP 2xx success code in
            response.
      - **RESIGNATED** The callback request has been attempted ``attempts`` times but was unsuccessful. The API did not
            receive a valid HTTP 2xx response."""

    OPEN = "OPEN"
    COMPLETED = "COMPLETED"
    RESIGNATED = "RESIGNATED"

    __str__ = str.__str__


CallbackStateOrStr: TypeAlias = Annotated[CallbackState | str, open_enum_validator(CallbackState)]
