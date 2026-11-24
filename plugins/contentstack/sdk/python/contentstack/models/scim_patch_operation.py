from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.op import OpOrStr


class ScimPatchOperation(SdkBaseModel):
    """A single SCIM PATCH operation."""

    op: OpOrStr
    """The operation type."""

    path: Optional[str] = UNSET
    """The attribute path to target for the operation."""

    value: Optional[Any] = UNSET
    """The value to apply for add or replace operations."""


class ScimPatchOperationDict(TypedDict):
    op: OpOrStr
    path: NotRequired[str]
    value: NotRequired[Any]
