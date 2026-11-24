from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .scim_patch_operation import ScimPatchOperation, ScimPatchOperationDict


class ScimPatchRequest(SdkBaseModel):
    """A SCIM 2.0 PatchOp request for partial resource updates."""

    schemas: Optional[list[str]] = UNSET
    """SCIM schema URN identifying this as a PatchOp request."""

    operations: Optional[list[ScimPatchOperation]] = Field(default=UNSET, alias="Operations")
    """List of PATCH operations to perform."""


class ScimPatchRequestDict(TypedDict):
    schemas: NotRequired[list[str]]
    operations: NotRequired[list[ScimPatchOperationDict]]
