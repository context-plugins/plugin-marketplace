from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode3 import Mode3OrStr
from .enums.type5 import Type5OrStr
from .external_origin import ExternalOrigin, ExternalOriginDict
from .external_split_target import ExternalSplitTarget, ExternalSplitTargetDict


class ExternalSplit(SdkBaseModel):
    """Specification of how to split costs."""

    id: Optional[str] = UNSET
    """ID of the field to split."""

    include_origin: Optional[bool] = Field(default=UNSET, alias="includeOrigin")
    """Indicate whether to include the origin."""

    mode: Optional[Mode3OrStr] = UNSET
    origin: Optional[ExternalOrigin] = UNSET
    """Origin info for cost splitting."""

    targets: Optional[list[ExternalSplitTarget]] = UNSET
    """Targets for the split."""

    type_: Optional[Type5OrStr] = Field(default=UNSET, alias="type")
    """Type of the split."""


class ExternalSplitDict(TypedDict):
    id: NotRequired[str]
    include_origin: NotRequired[bool]
    mode: NotRequired[Mode3OrStr]
    origin: NotRequired[ExternalOriginDict]
    targets: NotRequired[list[ExternalSplitTargetDict]]
    type_: NotRequired[Type5OrStr]
