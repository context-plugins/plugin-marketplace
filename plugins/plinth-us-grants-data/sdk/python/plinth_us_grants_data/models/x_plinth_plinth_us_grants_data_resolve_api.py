from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .warning_model import WarningModel, WarningModelDict


class XPlinthPlinthUsGrantsDataResolveApi(SdkBaseModel):
    """Present only when something needs saying: ``warnings[]`` names any parameter this endpoint does not accept or
    could not honour, and ``unsupported[]`` lists the fatal ones. Same shape as the grant endpoints."""

    warnings: Optional[list[WarningModel]] = UNSET
    unsupported: Optional[list[str]] = UNSET


class XPlinthPlinthUsGrantsDataResolveApiDict(TypedDict):
    warnings: NotRequired[list[WarningModelDict]]
    unsupported: NotRequired[list[str]]
