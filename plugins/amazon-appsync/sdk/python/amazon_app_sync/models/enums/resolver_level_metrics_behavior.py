from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResolverLevelMetricsBehavior(str, Enum):
    """Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include: GraphQL errors: The number
    of GraphQL errors that occurred. Requests: The number of invocations that occurred during a request. Latency: The
    time to complete a resolver invocation. Cache hits: The number of cache hits during a request. Cache misses: The
    number of cache misses during a request. These metrics can be emitted to CloudWatch per resolver or for all
    resolvers in the request. Metrics will be recorded by API ID and resolver name. resolverLevelMetricsBehavior accepts
    one of these values at a time: FUL"""

    FULL_REQUEST_RESOLVER_METRICS = "FULL_REQUEST_RESOLVER_METRICS"
    PER_RESOLVER_METRICS = "PER_RESOLVER_METRICS"

    __str__ = str.__str__


ResolverLevelMetricsBehaviorOrStr: TypeAlias = Annotated[
    ResolverLevelMetricsBehavior | str, open_enum_validator(ResolverLevelMetricsBehavior)
]
