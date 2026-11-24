from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .docker_server_status import DockerServerStatus, DockerServerStatusDict
from .enums.compute_type import ComputeTypeOrStr


class DockerServer(SdkBaseModel):
    compute_type: ComputeTypeOrStr = Field(alias="computeType")
    """Information about the compute resources the docker server uses. Available values include: BUILD_GENERAL1_SMALL:
    Use up to 4 GiB memory and 2 vCPUs for your docker server. BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs
    for your docker server. BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server.
    BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server. BUILD_GENERAL1_2XLARGE: Use up
    to 128 GiB memory and 64 vCPUs for your docker server."""

    security_group_ids: Optional[list[str]] = Field(default=UNSET, alias="securityGroupIds")
    """A list of one or more security groups IDs. Security groups configured for Docker servers should allow ingress
    network traffic from the VPC configured in the project. They should allow ingress on port 9876."""

    status: Optional[DockerServerStatus] = UNSET


class DockerServerDict(TypedDict):
    compute_type: ComputeTypeOrStr
    security_group_ids: NotRequired[list[str]]
    status: NotRequired[DockerServerStatusDict]
