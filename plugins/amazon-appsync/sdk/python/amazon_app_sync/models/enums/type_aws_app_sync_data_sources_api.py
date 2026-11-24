from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsAppSyncDataSourcesApi(str, Enum):
    """The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source
    is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain.
    AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data
    source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock
    runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting
    to a data source, such as when you're perf"""

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


TypeAwsAppSyncDataSourcesApiOrStr: TypeAlias = Annotated[
    TypeAwsAppSyncDataSourcesApi | str, open_enum_validator(TypeAwsAppSyncDataSourcesApi)
]
