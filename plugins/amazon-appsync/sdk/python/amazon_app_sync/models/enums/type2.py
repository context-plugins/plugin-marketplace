from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """The new data source type."""

    AWS_LAMBDA = "AWS_LAMBDA"
    AMAZON_DYNAMODB = "AMAZON_DYNAMODB"
    AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH"
    NONE = "NONE"
    HTTP = "HTTP"
    RELATIONAL_DATABASE = "RELATIONAL_DATABASE"
    AMAZON_OPENSEARCH_SERVICE = "AMAZON_OPENSEARCH_SERVICE"
    AMAZON_EVENTBRIDGE = "AMAZON_EVENTBRIDGE"
    AMAZON_BEDROCK_RUNTIME = "AMAZON_BEDROCK_RUNTIME"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
