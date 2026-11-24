from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ssm_session import SsmSession, SsmSessionDict


class StartSandboxConnectionOutput(SdkBaseModel):
    ssm_session: Optional[SsmSession] = Field(default=UNSET, alias="ssmSession")


class StartSandboxConnectionOutputDict(TypedDict):
    ssm_session: NotRequired[SsmSessionDict]
