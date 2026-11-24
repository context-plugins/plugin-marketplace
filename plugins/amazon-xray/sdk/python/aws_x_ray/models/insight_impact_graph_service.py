from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_impact_graph_edge import InsightImpactGraphEdge, InsightImpactGraphEdgeDict


class InsightImpactGraphService(SdkBaseModel):
    reference_id: Optional[int] = Field(default=UNSET, alias="ReferenceId")
    """Identifier for the service. Unique within the service map."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """Identifier for the service. Unique within the service map. Amazon Web Services Resource - The type of an Amazon
    Web Services resource. For example, AWS::EC2::Instance for an application running on Amazon EC2 or
    AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. Amazon Web Services Service - The type
    of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't
    target a specific table. Amazon Web Services Service - The type of an Amazon Web Services service. For example,
    AWS::DynamoDB for downstream calls to Amazon Dy"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The canonical name of the service."""

    names: Optional[list[str]] = Field(default=UNSET, alias="Names")
    """A list of names for the service, including the canonical name."""

    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """Identifier of the Amazon Web Services account in which the service runs."""

    edges: Optional[list[InsightImpactGraphEdge]] = Field(default=UNSET, alias="Edges")
    """Connections to downstream services."""


class InsightImpactGraphServiceDict(TypedDict):
    reference_id: NotRequired[int]
    type_: NotRequired[str]
    name: NotRequired[str]
    names: NotRequired[list[str]]
    account_id: NotRequired[str]
    edges: NotRequired[list[InsightImpactGraphEdgeDict]]
