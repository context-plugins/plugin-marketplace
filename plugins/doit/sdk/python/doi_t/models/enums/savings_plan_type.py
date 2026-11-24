from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SavingsPlanType(str, Enum):
    """Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus ``database``."""

    COMPUTE = "compute"
    EC2_INSTANCE = "ec2_instance"
    SAGEMAKER = "sagemaker"
    DATABASE = "database"

    __str__ = str.__str__


SavingsPlanTypeOrStr: TypeAlias = Annotated[SavingsPlanType | str, open_enum_validator(SavingsPlanType)]
