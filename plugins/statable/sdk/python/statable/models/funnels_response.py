from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .funnel_definition import FunnelDefinition, FunnelDefinitionDict


class FunnelsResponse(SdkBaseModel):
    funnels: list[FunnelDefinition]


class FunnelsResponseDict(TypedDict):
    funnels: list[FunnelDefinitionDict]
