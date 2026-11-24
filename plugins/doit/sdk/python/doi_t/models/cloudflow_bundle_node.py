from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .approval import Approval, ApprovalDict
from .transition import Transition, TransitionDict


class CloudflowBundleNode(SdkBaseModel):
    key: str
    name: str
    description: Optional[str] = UNSET
    type_: str = Field(alias="type")
    """Node type (e.g. ``triggerNode``, ``actionNode``, ``datastoreNode``). Validated against the supported node-type
    set at import."""

    parameters: Optional[Any] = UNSET
    """Node parameters with tenant-scoped scalar references replaced by ``$req:``/``$bundle:`` tokens."""

    approval: Optional[Approval] = UNSET
    """Approval configuration without recipients (recipients are tenant-scoped and removed at export)."""

    transitions: Optional[list[Transition]] = UNSET


class CloudflowBundleNodeDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    type_: str
    parameters: NotRequired[Any]
    approval: NotRequired[ApprovalDict]
    transitions: NotRequired[list[TransitionDict]]
