from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTPerfectScaleForCommitmentsAwsApi(str, Enum):
    COMPUTE = "compute"
    EC2_INSTANCE = "ec2_instance"
    SAGEMAKER = "sagemaker"
    DATABASE = "database"

    __str__ = str.__str__


TypeDoiTPerfectScaleForCommitmentsAwsApiOrStr: TypeAlias = Annotated[
    TypeDoiTPerfectScaleForCommitmentsAwsApi | str, open_enum_validator(TypeDoiTPerfectScaleForCommitmentsAwsApi)
]
