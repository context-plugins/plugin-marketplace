from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bindings import Bindings, BindingsDict
from .cloudflow_flow_bundle import CloudflowFlowBundle, CloudflowFlowBundleDict
from .options import Options, OptionsDict


class CloudflowImportFlowsRequest(SdkBaseModel):
    bundle: CloudflowFlowBundle
    """Portable, tenant-neutral export of one or more flows. Contains no credentials, tenant identifiers, schedules, or
    execution state; tenant-scoped references are declared under ``requirements`` and appear inside node parameters as
    ``$req:<section>/<key>`` tokens (subflow references as ``$bundle:flows/<flowKey>``)."""

    bindings: Optional[Bindings] = UNSET
    """Requirement key → target-tenant resource ID. Keys must be declared in the bundle's requirements. Run with
    ``?dryRun=true`` first to list required keys and candidate IDs."""

    options: Optional[Options] = UNSET


class CloudflowImportFlowsRequestDict(TypedDict):
    bundle: CloudflowFlowBundleDict
    bindings: NotRequired[BindingsDict]
    options: NotRequired[OptionsDict]
