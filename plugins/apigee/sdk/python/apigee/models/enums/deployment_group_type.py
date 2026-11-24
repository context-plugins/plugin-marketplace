from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeploymentGroupType(str, Enum):
    """Type of the deployment group, which will be either Standard or Extensible."""

    DEPLOYMENT_GROUP_TYPE_UNSPECIFIED = "DEPLOYMENT_GROUP_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    EXTENSIBLE = "EXTENSIBLE"

    __str__ = str.__str__


DeploymentGroupTypeOrStr: TypeAlias = Annotated[DeploymentGroupType | str, open_enum_validator(DeploymentGroupType)]
