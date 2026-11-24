from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefaultAction(str, Enum):
    """The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool
    authentication doesn't match the Amazon Cognito user pool configuration."""

    ALLOW = "ALLOW"
    DENY = "DENY"

    __str__ = str.__str__


DefaultActionOrStr: TypeAlias = Annotated[DefaultAction | str, open_enum_validator(DefaultAction)]
