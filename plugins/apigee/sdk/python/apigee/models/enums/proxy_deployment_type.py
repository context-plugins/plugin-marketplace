from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProxyDeploymentType(str, Enum):
    """Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as
    extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment
    supports flowhooks and flow hook is configured."""

    PROXY_DEPLOYMENT_TYPE_UNSPECIFIED = "PROXY_DEPLOYMENT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    EXTENSIBLE = "EXTENSIBLE"

    __str__ = str.__str__


ProxyDeploymentTypeOrStr: TypeAlias = Annotated[ProxyDeploymentType | str, open_enum_validator(ProxyDeploymentType)]
