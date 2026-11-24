from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .cloudflow_bundle_flow import CloudflowBundleFlow, CloudflowBundleFlowDict
from .cloudflow_bundle_requirements import CloudflowBundleRequirements, CloudflowBundleRequirementsDict


class CloudflowFlowBundle(SdkBaseModel):
    """Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant identifiers, schedules, or
    execution state; tenant-scoped references are declared under ``requirements`` and appear inside node parameters as
    ``$req:<section>/<key>`` tokens (subflow references as ``$bundle:flows/<flowKey>``)."""

    kind: Literal["cloudflow.doit.com/FlowBundle"] = "cloudflow.doit.com/FlowBundle"
    schema_version: Literal[1] = Field(default=1, alias="schemaVersion")
    """Bundle format version. The server exports the newest version and accepts every version it has ever shipped."""

    exported_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="exportedAt")
    """Informational export timestamp; ignored on import."""

    root_flow: str = Field(alias="rootFlow")
    """Key (into ``flows``) of the flow that was exported; the rest are its subflows."""

    flows: list[CloudflowBundleFlow]
    requirements: Optional[CloudflowBundleRequirements] = UNSET
    """Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import."""


class CloudflowFlowBundleDict(TypedDict):
    kind: Literal["cloudflow.doit.com/FlowBundle"]
    schema_version: Literal[1]
    exported_at: NotRequired[RFC3339DateTime | None]
    root_flow: str
    flows: list[CloudflowBundleFlowDict]
    requirements: NotRequired[CloudflowBundleRequirementsDict]
