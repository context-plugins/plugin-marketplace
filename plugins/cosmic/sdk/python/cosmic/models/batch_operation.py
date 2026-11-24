from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method import MethodOrStr


class BatchOperation(SdkBaseModel):
    """One operation in a batch request."""

    model_config = ConfigDict(extra="forbid")

    method: MethodOrStr
    object_id: Optional[str] = UNSET
    """Required for ``edit`` and ``delete``."""

    object_: Optional[Any] = Field(default=UNSET, alias="object")
    """Required for ``add`` and ``edit``. Accepts the same properties as the single-Object create and update
    endpoints."""

    trigger_webhook: Optional[bool] = UNSET


class BatchOperationDict(TypedDict):
    method: MethodOrStr
    object_id: NotRequired[str]
    object_: NotRequired[Any]
    trigger_webhook: NotRequired[bool]
