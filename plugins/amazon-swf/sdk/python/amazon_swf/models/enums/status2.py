from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """The status of the domain: REGISTERED – The domain is properly registered and available. You can use this domain
    for registering types and creating new workflow executions. DEPRECATED – The domain was deprecated using
    DeprecateDomain, but is still in use. You should not create new workflow executions in this domain."""

    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
