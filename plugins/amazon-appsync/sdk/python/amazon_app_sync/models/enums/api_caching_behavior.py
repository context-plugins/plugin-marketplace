from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiCachingBehavior(str, Enum):
    """Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual resolvers are
    automatically cached. All API calls will try to return responses from the cache. PER_RESOLVER_CACHING: Individual
    resolvers that you specify are cached. OPERATION_LEVEL_CACHING: Full requests are cached together and returned
    without executing resolvers."""

    FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING"
    PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"
    OPERATION_LEVEL_CACHING = "OPERATION_LEVEL_CACHING"

    __str__ = str.__str__


ApiCachingBehaviorOrStr: TypeAlias = Annotated[ApiCachingBehavior | str, open_enum_validator(ApiCachingBehavior)]
