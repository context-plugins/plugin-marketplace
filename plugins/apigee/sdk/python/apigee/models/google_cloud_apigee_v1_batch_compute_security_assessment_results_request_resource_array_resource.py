from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource(SdkBaseModel):
    """Resource for which we are computing security assessment."""

    name: Optional[str] = UNSET
    """Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API proxy. For an API Hub
    Deployment, this should be the id of the deployment."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Required. Type of this resource."""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[Type1OrStr]
