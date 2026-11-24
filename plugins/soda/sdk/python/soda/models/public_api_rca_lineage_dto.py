from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_rca_lineage_edge_dto import PublicApiRcaLineageEdgeDto, PublicApiRcaLineageEdgeDtoDict
from .public_api_rca_lineage_node_dto import PublicApiRcaLineageNodeDto, PublicApiRcaLineageNodeDtoDict


class PublicApiRcaLineageDto(SdkBaseModel):
    edges: Optional[list[PublicApiRcaLineageEdgeDto]] = UNSET
    nodes: Optional[list[PublicApiRcaLineageNodeDto]] = UNSET


class PublicApiRcaLineageDtoDict(TypedDict):
    edges: NotRequired[list[PublicApiRcaLineageEdgeDtoDict]]
    nodes: NotRequired[list[PublicApiRcaLineageNodeDtoDict]]
