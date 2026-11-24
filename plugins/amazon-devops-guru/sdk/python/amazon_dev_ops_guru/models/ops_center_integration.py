from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.opt_in_status import OptInStatusOrStr


class OpsCenterIntegration(SdkBaseModel):
    opt_in_status: Optional[OptInStatusOrStr] = Field(default=UNSET, alias="OptInStatus")
    """Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created
    insight."""


class OpsCenterIntegrationDict(TypedDict):
    opt_in_status: NotRequired[OptInStatusOrStr]
