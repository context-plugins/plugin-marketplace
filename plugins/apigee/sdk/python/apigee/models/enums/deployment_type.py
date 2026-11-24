from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeploymentType(str, Enum):
    """Optional. Deployment type supported by the environment. The deployment type can be set when creating the
    environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a
    `subset of actions </apigee/docs/api-platform/local-development/overview#prevented-actions>`__ within the
    environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or
    deleting resource files * Creating, updating, or deleting target servers"""

    DEPLOYMENT_TYPE_UNSPECIFIED = "DEPLOYMENT_TYPE_UNSPECIFIED"
    PROXY = "PROXY"
    ARCHIVE = "ARCHIVE"

    __str__ = str.__str__


DeploymentTypeOrStr: TypeAlias = Annotated[DeploymentType | str, open_enum_validator(DeploymentType)]
