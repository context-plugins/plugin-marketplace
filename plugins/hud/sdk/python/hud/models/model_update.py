from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelUpdate(SdkBaseModel):
    """Editable catalog fields. Admin-only (see ModelService.update)."""

    name: Optional[str] = UNSET
    hidden: Optional[bool] = UNSET
    request_defaults: Optional[Any] = UNSET


class ModelUpdateDict(TypedDict):
    name: NotRequired[str]
    hidden: NotRequired[bool]
    request_defaults: NotRequired[Any]
