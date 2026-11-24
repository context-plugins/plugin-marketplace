from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extension_deployment_status import ExtensionDeploymentStatus, ExtensionDeploymentStatusDict


class CompaniesApiExtensionDeploymentStatusResponse(SdkBaseModel):
    value: Optional[list[ExtensionDeploymentStatus]] = UNSET


class CompaniesApiExtensionDeploymentStatusResponseDict(TypedDict):
    value: NotRequired[list[ExtensionDeploymentStatusDict]]
