from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceNameAmazonDevOpsGuruAnomaliesApi(str, Enum):
    API_GATEWAY = "API_GATEWAY"
    APPLICATION_ELB = "APPLICATION_ELB"
    AUTO_SCALING_GROUP = "AUTO_SCALING_GROUP"
    CLOUD_FRONT = "CLOUD_FRONT"
    DYNAMO_DB = "DYNAMO_DB"
    EC2 = "EC2"
    ECS = "ECS"
    EKS = "EKS"
    ELASTIC_BEANSTALK = "ELASTIC_BEANSTALK"
    ELASTI_CACHE = "ELASTI_CACHE"
    ELB = "ELB"
    ES = "ES"
    KINESIS = "KINESIS"
    LAMBDA = "LAMBDA"
    NAT_GATEWAY = "NAT_GATEWAY"
    NETWORK_ELB = "NETWORK_ELB"
    RDS = "RDS"
    REDSHIFT = "REDSHIFT"
    ROUTE_53 = "ROUTE_53"
    S3 = "S3"
    SAGE_MAKER = "SAGE_MAKER"
    SNS = "SNS"
    SQS = "SQS"
    STEP_FUNCTIONS = "STEP_FUNCTIONS"
    SWF = "SWF"

    __str__ = str.__str__


ServiceNameAmazonDevOpsGuruAnomaliesApiOrStr: TypeAlias = Annotated[
    ServiceNameAmazonDevOpsGuruAnomaliesApi | str, open_enum_validator(ServiceNameAmazonDevOpsGuruAnomaliesApi)
]
