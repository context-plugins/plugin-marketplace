from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .cloudflow_bundle_node import CloudflowBundleNode, CloudflowBundleNodeDict
from .cloudflow_bundle_variable import CloudflowBundleVariable, CloudflowBundleVariableDict
from .unsupported_reference import UnsupportedReference, UnsupportedReferenceDict


class CloudflowBundleFlow(SdkBaseModel):
    key: str
    """Bundle-local flow key. Opaque — the server generates new IDs at import."""

    name: str
    description: Optional[str] = UNSET
    tags: Optional[dict[str, Any]] = UNSET
    trigger_type: OptionalNullable[str] = Field(default=UNSET, alias="triggerType")
    first_node: str = Field(alias="firstNode")
    """Key of this flow's entry node."""

    nodes: list[CloudflowBundleNode]
    local_variables: Optional[list[CloudflowBundleVariable]] = Field(default=UNSET, alias="localVariables")
    unsupported_references: Optional[list[UnsupportedReference]] = Field(default=UNSET, alias="unsupportedReferences")
    """Tenant-scoped references removed at export (policy IDs, Slack channels); import flags the affected nodes
    incomplete."""


class CloudflowBundleFlowDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    tags: NotRequired[dict[str, Any]]
    trigger_type: NotRequired[str | None]
    first_node: str
    nodes: list[CloudflowBundleNodeDict]
    local_variables: NotRequired[list[CloudflowBundleVariableDict]]
    unsupported_references: NotRequired[list[UnsupportedReferenceDict]]
