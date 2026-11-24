from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.effect import EffectOrStr
from .enums.type_aws_code_build_fleet_api import TypeAwsCodeBuildFleetApiOrStr


class FleetProxyRule(SdkBaseModel):
    type_: TypeAwsCodeBuildFleetApiOrStr = Field(alias="type")
    """The type of proxy rule."""

    effect: EffectOrStr
    """The behavior of the proxy rule."""

    entities: list[str]
    """The destination of the proxy rule."""


class FleetProxyRuleDict(TypedDict):
    type_: TypeAwsCodeBuildFleetApiOrStr
    effect: EffectOrStr
    entities: list[str]
